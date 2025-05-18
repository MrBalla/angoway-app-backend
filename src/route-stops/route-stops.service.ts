import { Inject, Injectable } from '@nestjs/common';
import { Prisma, Route, Stop } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';
import { RoutesService } from 'src/routes/routes.service';
import { StopesService } from 'src/stopes/stopes.service';

@Injectable()
export class RouteStopsService {
    @Inject()
    private readonly prisma: PrismaService;
   
    //Adicionar uma paragem a uma rota
    async addToRoute(routeId: number, stopId: number, order: number){
        const [route, stop] = await Promise.all([
            this.prisma.route.findUnique({where: {id: routeId}}),
            this.prisma.stop.findUnique({where: {id: stopId}})
        ]);

        if(!route || !stop) throw new Error('Rota ou Paragem não encontrada');

        return await this.prisma.routeStop.create({
            data: {
                routeId: route.id,
                stopId: stop.id,
                order
            }
        });
    }

    //Remover uma paragem de uma rota
    async removeStopFromRoute(routeStopId: number){
        const routeStop = await this.prisma.routeStop.findUnique({
            where: {id: routeStopId}
        });

        if(!routeStop) throw new Error('Paragem não encontrada');  
        return await this.prisma.routeStop.delete({
            where: {id: routeStopId}
        });
    }

    async getStopsByRoute(routeId: number){
        return await this.prisma.routeStop.findMany({
            where: {routeId},
            orderBy:{order: 'asc'},
            include: {
                stop: true
            }
        });
    }
}
