import { Injectable, Inject } from '@nestjs/common';
import { Prisma, Bus } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class BusService {

    @Inject()
    private readonly prisma: PrismaService;


    //Crud Basico
    //Criando o Bus
    async createBus(data: Prisma.BusCreateInput){
        return this.prisma.bus.create({data})
    }

    //Mostrar os Buses
    async buses(): Promise<Bus[]> {
        return this.prisma.bus.findMany();
    }
    
    async findBusById(id: number): Promise<Bus | null> {
        return this.prisma.bus.findUnique({
            where: {
                id
            }
        })
    }

    async findBusByDriverId(driverId: number) {
        return this.prisma.bus.findFirst({
            where: { driverId },
            include: {
                driver:{
                    select:{
                        name:true,
                        url_foto_de_perfil: true
                    }
                },
                route:{
                    select:{
                        name: true,
                        estimatedTime: true,    
                    }
                }
            }
        })
    }


    async updateBus(id: number, data: Prisma.BusUpdateInput): Promise<Bus> {
        return this.prisma.bus.update({where:{id}, data})
    }
    async deleteBus(id: number): Promise<Bus> {
        return this.prisma.bus.delete({where:{id}})
    }

    async provideBusDetails(driverId: number): Promise<Bus | null>{
        return this.prisma.bus.findFirst({
            where: { driverId },
            include: {
                route: {
                    select: {
                        origin: true,
                        destination: true,
                        estimatedTime: true,
                        stops: true
                    }
                }
            }
        })
    }

   // async updateLocation(id: number, location)
}
