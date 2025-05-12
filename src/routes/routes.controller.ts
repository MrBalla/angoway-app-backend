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
    Patch,
    UseGuards
   } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { RoutesService } from './routes.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { RouteResponse } from 'src/types/routes.response';

@Controller('routes')
export class RoutesController {

@Inject()
private readonly routesService: RoutesService

//Só para Admnistrador, entt têm que se por auth para Admin
@Post('')
@HttpCode(HttpStatus.CREATED)
async createRoute(@Body() routeData: Prisma.RouteCreateInput): Promise<void> {
   await this.routesService.create(routeData);
}

   @UseGuards(AuthGuard)
  @Get('/search/:query')
  async findByName(@Param('query') query: string): Promise<RouteResponse[]> {
    const routes = await this.routesService.findByName(query);
    if (!routes || routes.length === 0) {
      throw new NotFoundException(`Rota ${query} não encontrada `);
    }
     return routes.map((route) => ({
        id: route.id,
        origin: route.origin,
        destination: route.destination,
         stops: route.stops.map((stop) => ({
            id: stop.id,
            name: stop.name,
         })),
      }));
  }

//Só para Admnistrador, entt têm que se por auth para Admin
@Put('/:id')
@HttpCode(HttpStatus.OK)
async updateRoutes(@Param('id') id: string, @Body() routeData: Prisma.RouteUpdateInput): Promise<void> {
   const update = await this.routesService.updateRoutes(Number(id), routeData);
   if (!update) {
       throw new NotFoundException(`Rota com ID ${id} não encontrada`);
   }
}

@UseGuards(AuthGuard)
@Get('')
async findAllRoutes(): Promise<any> {
   return await this.routesService.findAll();
}

@UseGuards(AuthGuard)
@Get('/:id')
async findOneRoute(@Param('id') id: string): Promise<any> {
   const route = await this.routesService.findOne(Number(id));
   if (!route) {
       throw new NotFoundException(`Rota com ID ${id} não encontrada`);
   }
   return route;
}

//Só  para Admnistrador, entt têm que se por auth para Admin
@Delete('/:id')
@HttpCode(HttpStatus.OK)
async deleteRoute(@Param('id') id: string): Promise<void> {
   await this.routesService.deleteRoutes(Number(id));
}

@UseGuards(AuthGuard)
@Get('findByOriginOrDestination/:query')
async findByOriginOrDestination(@Param('query') query: string): Promise<any> {
   return await this.routesService.findByOriginOrDestination(query);
}

@UseGuards(AuthGuard)
@Get('findByStops/:stopName')
async findByStops(@Param('stopName') stopName: string): Promise<any> {
   return await this.routesService.findByStops(stopName);
}

//Só para Admnistrador, entt têm que se por auth para Admin
@Patch('updateStatus/:id')
@HttpCode(HttpStatus.OK)
async updateStatus(@Param('id') id: number): Promise<void> {
   const update = await this.routesService.toggleStatus(id);
   if (!update) {
       throw new NotFoundException(`Rota com ID ${id} não encontrada`);
   }
}

}
