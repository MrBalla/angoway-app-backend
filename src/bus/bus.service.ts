import { Injectable, Inject } from '@nestjs/common';
import { Prisma, Bus } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class BusService {

    @Inject()
    private readonly prisma: PrismaService;

    //Criando o Bus
    async createBus(data: Prisma.BusCreateInput){
        return this.prisma.bus.create({data})
    }

    //Mostrar os Buses
    async buses(): Promise<Bus[]> {
        return this.prisma.bus.findMany();
    }
    

}
