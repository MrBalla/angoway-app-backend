import { Body, Controller, Delete, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { RouteStopsService } from './route-stops.service';

@Controller('route-stops')
export class RouteStopsController {
    constructor(private readonly routeStopsService: RouteStopsService) {}
    
    @Post()
    @HttpCode(HttpStatus.CREATED)
    async createRouteStops(@Body() data: {
        routeId: number;
        stopId: number;
        order: number
    }) {
        const added =await this.routeStopsService.addToRoute(
            data.routeId,
            data.stopId,
            data.order
        );
        return{
            message: 'adicionada com sucesso',
            data: added,
        }
    }

    @Delete(':id')
    @HttpCode(HttpStatus.OK)
    async deleteRouteStops(@Param('id')id: string) {
        await this.routeStopsService.removeStopFromRoute(Number(id));
        return {
            message: 'removida com sucesso',
        }
    }

    @Patch('ordenar/:id')
    @HttpCode(HttpStatus.OK)
    
}
