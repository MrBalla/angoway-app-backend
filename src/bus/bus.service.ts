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
    async updateBus(id: number, data: Prisma.BusUpdateInput): Promise<Bus> {
        return this.prisma.bus.update({where:{id}, data})
    }
    async deleteBus(id: number): Promise<Bus> {
        return this.prisma.bus.delete({where:{id}})
    }

   // async updateLocation(id: number, location)
}
