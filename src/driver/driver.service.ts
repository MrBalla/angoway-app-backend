import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { Prisma, Driver } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';
import * as bcrypt from 'bcrypt';
@Injectable()
export class DriverService {
    @Inject()
    private readonly prisma: PrismaService;

    async allDrivers(): Promise<Driver[]> {
        return this.prisma.driver.findMany();
    }
    
    async createDriver(data: Prisma.DriverCreateInput){
        const isEmailUsed = await this.driver({ email: data.email });
        if(isEmailUsed)
            throw new BadRequestException(
            'email já cadastrado',
            );
        
        const isNumberUsed = await this.driver({phone: data.phone});
        if(isNumberUsed)
            throw new BadRequestException(
            'numero já cadastrado',
            );
        
        const isLicenseUsed = await this.driver({licenseNumber: data.licenseNumber});           
        if(isLicenseUsed)
            throw new BadRequestException(
            'Licença já cadastrada',
            );
        
        const hashPasssword = await bcrypt.hash(data.password, 10);
        return this.prisma.driver.create({
            data: { ...data, password: hashPasssword },
        });
    }

    //busca o motorista pelo id
    async driver(
        driverWhereUniqueInput: Prisma.DriverWhereUniqueInput,
      ): Promise<Driver | null> {
        return this.prisma.driver.findUnique({
          where: driverWhereUniqueInput,
        });
    }

    async getDriversAvailable(): Promise<Driver[]>{
        return this.prisma.driver.findMany({
            where: {
                status: 'AVAILABLE',
            },
        });
    }

    async getDriversOnRoute(): Promise<Driver[]>{
        return this.prisma.driver.findMany({
            where: {
                status: 'ON_ROUTE',
            },
        });
    }

    async countActiveDrivers(): Promise<{ count: number }>{
        const driversOnRoute = await this.getDriversOnRoute();
        const driversAvailables = await this.getDriversAvailable();
        const count = driversOnRoute.length + driversAvailables.length;
        return { count };
    }

    async countInactiveDrivers(): Promise<{ count: number }>{
        const count = await this.prisma.driver.count({
            where: {
                status: "OFFLINE"
            }
        })
        return { count };
    }


    async updateDriver(params: {
        where: Prisma.DriverWhereUniqueInput;
        data: Prisma.DriverUpdateInput;
    }): Promise<Driver> {
        const { where, data } = params;
        return this.prisma.driver.update({
            data,
            where,
        });
    }

    async updatePassword(params: {
        where: Prisma.DriverWhereUniqueInput;
        data: Prisma.DriverUpdateInput;
    }): Promise<Driver> {
        const { where, data } = params;
        if (typeof data.password !== 'string') {
            throw new BadRequestException('A senha deve ser uma string');
        }
        const hashPasssword = await bcrypt.hash(data.password, 10);
        return this.prisma.driver.update({
            data: { ...data, password: hashPasssword },
            where,
        });
    }

    /*async updateDriverLocation(params: {
        where: Prisma.DriverWhereUniqueInput;
        data: Prisma.DriverUpdateInput;
    }): Promise<Driver> {
        const { where, data } = params;
        return this.prisma.driver.update({
            data,
            where,
        });
    }*/
   async deleteDriver(where: Prisma.DriverWhereUniqueInput): Promise<Driver> {
        return this.prisma.driver.delete({
            where,
        });
    }

    

    async updateStatus(id: number, status: 'AVAILABLE' | 'ON_ROUTE' | 'OFFLINE'): Promise<Driver | null> {
        //Verificar se o Status é valido
        const validStatuses = ['AVAILABLE', 'ON_ROUTE', 'OFFLINE'];
        if (!validStatuses.includes(status)) {
            throw new BadRequestException('Status inválido');
        }

        return this.prisma.driver.update({
            where: { id },
            data: { status },
        });
    }

    async verifyDriver(where: Prisma.DriverWhereUniqueInput): Promise<Driver> {
        const driver = await this.driver(where);
        if (!driver) {
            throw new BadRequestException('Motorista não encontrado');
        }
        const verify = driver.isVerified === true ? false : true;

        return await this.prisma.driver.update({
            where: { id: driver.id },
            data: { isVerified: verify },
        });   
    }
    //atribuir o autocarro ao motorista
    async assignBus(driverId: number, busNia: string): Promise<Driver> {
        
        const driver = await this.driver({ id: driverId });
        if (!driver) {
            throw new BadRequestException('Motorista não encontrado');
        }

        const bus = await this.prisma.bus.findUnique({
            where: { nia: busNia },
        });
        if (!bus) {
            throw new BadRequestException('Autocarro não encontrado');
        }

        const driverUsingThisBus = await this.prisma.driver.findFirst({
            where: { 
                assignedBusNia: busNia,
                id: {
                    not: driverId,
                },
             },
        });
        if (driverUsingThisBus) {
            throw new BadRequestException('Este autocarro já está atribuído a outro motorista');
        }

        return this.prisma.driver.update({
            where: { id: driverId },
            data: { 
                assignedBusNia: busNia, 
                status: 'ON_ROUTE'
            },
        });
    }
    //remover a atribuição do autocarro ao motorista
    async unassignBus(driverId: number): Promise<Driver> {
        //Verificar se o motorista existe
        const driver = await this.driver({ id: driverId });
        if (!driver) {
            throw new BadRequestException('Motorista não encontrado');
        }
        //Verificar se o motorista está atribuído a um autocarro
        if(!driver.assignedBusNia) {
            throw new BadRequestException('Motorista não está atribuído a um autocarro');
        }
        //Remover a atribuição do autocarro e deixar o status como disponível
        return this.prisma.driver.update({
            where: { id: driverId },
            data: {
                assignedBusNia: null,
                status: 'AVAILABLE'
            },
        });
    }

    async updateLocation(id: number, lat: number, long: number): Promise<Driver>
    {
        return this.prisma.driver.update({
            where: { id },
            data: {
                currentLatitude: lat,
                currentLongitude: long,
            },
        });
    }
    
}
