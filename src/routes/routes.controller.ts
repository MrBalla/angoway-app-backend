import { Controller, 
    HttpCode, 
    Inject, 
    Post, 
    HttpStatus, 
    Body, 
    Get, 
    Param, 
    Put, 
    NotFoundException,
    Delete,
    Patch
   } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { RoutesService } from './routes.service';

@Controller('routes')
export class RoutesController {

@Inject()
private readonly routesService: RoutesService

@Post('')
@HttpCode(HttpStatus.CREATED)
async createRoute(@Body() routeData: Prisma.RouteCreateInput): Promise<void> {
   await this.routesService.create(routeData);
}
@Put('/:id')
@HttpCode(HttpStatus.OK)
async updateRoutes(@Param('id') id: string, @Body() routeData: Prisma.RouteUpdateInput): Promise<void> {
   const update = await this.routesService.updateRoutes(Number(id), routeData);
   if (!update) {
       throw new NotFoundException(`Rota com ID ${id} não encontrada`);
   }
}

@Get('')
async findAllRoutes(): Promise<any> {
   return await this.routesService.findAll();
}

@Get('/:id')
async findOneRoute(@Param('id') id: string): Promise<any> {
   const route = await this.routesService.findOne(Number(id));
   if (!route) {
       throw new NotFoundException(`Rota com ID ${id} não encontrada`);
   }
   return route;
}

@Delete('/:id')
async deleteRoute(@Param('id') id: string): Promise<void> {
   await this.routesService.deleteRoutes(Number(id));
}


@Get('findByOriginOrDestination/:query')
async findByOriginOrDestination(@Param('query') query: string): Promise<any> {
   return await this.routesService.findByOriginOrDestination(query);
}

@Get('findByStops/:stopName')
async findByStops(@Param('stopName') stopName: string): Promise<any> {
   return await this.routesService.findByStops(stopName);
}

@Patch('updateStatus/:id')
@HttpCode(HttpStatus.OK)
async updateStatus(@Param('id') id: number): Promise<void> {
   const update = await this.routesService.toggleStatus(id);
   if (!update) {
       throw new NotFoundException(`Rota com ID ${id} não encontrada`);
   }
}

}
