import {
  Controller,
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
  UseGuards,
  Query,
  BadRequestException,
} from '@nestjs/common';
import { Prisma, RouteSchedule } from '@prisma/client';
import { RoutesService } from './routes.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { RouteResponse } from 'src/types/routes.response';
import { ResponseBody } from 'src/types/response.body';

@Controller('routes')
export class RoutesController {
  @Inject()
  private readonly routesService: RoutesService;

  //Só para Admnistrador, entt têm que se por auth para Admin
  @Post('')
  @HttpCode(HttpStatus.CREATED)
  async createRoute(
    @Body()
    routeData: {
      name: string;
      origin: string;
      destination: string;
      stopIdsInOrder: number[];
    },
  ): Promise<ResponseBody> {
    await this.routesService.createRouteWithStops(routeData);
    return {
      message: 'Rota criada com Sucesso!',
      code: HttpStatus.CREATED,
    };
  }

  @Put('assign-schedule/:scheduleId')
  @UseGuards(AuthGuard)
  @HttpCode(HttpStatus.OK)
  async assignDriverToBus(
    @Param('scheduleId') scheduleId: string,
    @Body('routeId') routeId: string,
  ): Promise<ResponseBody> {

    
    const scheduleNumericId = parseInt(scheduleId, 10);
    if (isNaN(scheduleNumericId)) {
      return {
        code: HttpStatus.BAD_REQUEST,
        message: `ID inválido: ${scheduleId}`,
      };
    }

    const routeNumericId = parseInt(routeId, 10);
    if (isNaN(routeNumericId)) {
      return {
        code: HttpStatus.BAD_REQUEST,
        message: `ID inválido: ${routeId}`,
      };
    }

    const response = await this.routesService.assignSchedule(
      scheduleNumericId,
      routeNumericId,
    );

    if (response) {
      return {
        code: HttpStatus.OK,
        message: 'Horário Atribuido com Sucesso !',
      };
    }

    return {
      code: 500,
      message: 'Não foi possível atribuir o Horário',
    };
  }

  @Get('count-active')
  @UseGuards(AuthGuard)
  async countActiveRoutes(): Promise<{ count: number }> {
    return await this.routesService.countActiveRoutes();
  }

  @Get('count')
  @UseGuards(AuthGuard)
  async countRoutes(): Promise<{ count: number }> {
    return await this.routesService.countRoutes();
  }

  @Get('count-inactive')
  @UseGuards(AuthGuard)
  async countInactiveRoutes(): Promise<{ count: number }> {
    return await this.routesService.countInactiveRoutes();
  }

  @Get('detailed')
  @UseGuards(AuthGuard)
  async getDetailedRoutes() {
    return await this.routesService.getDetailedRoutes();
  }

  @Get('suggestions')
  async suggestRoutes(@Query('lat') lat: string, @Query('lng') lng: string) {
    const userLat = parseFloat(lat);
    const userLng = parseFloat(lng);

    if (isNaN(userLat) || isNaN(userLng)) {
      throw new BadRequestException('Latitude e longitude Inválidas');
    }
    return this.routesService.suggestRoutes(userLat, userLng);
  }

  @UseGuards(AuthGuard)
  @Get('/search/:query')
  async findByName(
    @Param('query') query: string,
  ): Promise<RouteResponse[] | ResponseBody> {
    const routes = await this.routesService.findByName(query);
    if (!routes || routes.length === 0) {
      return {
        code: HttpStatus.NOT_FOUND,
        message: `Nenhum Resultado `,
      };
    }
    return routes.map((route) => ({
      id: route.id,
      origin: route.origin,
      destination: route.destination,
      stops: route.routeStops.map((rs) => ({
        id: rs.stop.id,
        name: rs.stop.name,
      })),
    }));
  }

  @UseGuards(AuthGuard)
  @Get('/schedules/search/:query')
  async findScheduleByRouteName(@Param('query') query: string) {
    const schedules = await this.routesService.findScheduleByRoute(query);

    if (!schedules || schedules.length === 0) {
      return {
        code: HttpStatus.NOT_FOUND,
        message: `Nenhum Resultado `,
      };
    }

    return schedules;
  }

  //Só para Admnistrador, entt têm que se por auth para Admin
  @Put('/:id')
  @HttpCode(HttpStatus.OK)
  async updateRoutes(
    @Param('id') id: string,
    @Body() routeData: Prisma.RouteUpdateInput,
  ): Promise<ResponseBody> {
    const update = await this.routesService.updateRoutes(Number(id), routeData);
    if (!update) {
      throw new NotFoundException(`Rota com ID ${id} não encontrada`);
    }
    return {
      message: 'Rota atualizada com Sucesso!',
      code: HttpStatus.OK,
    };
  }

  @UseGuards(AuthGuard)
  @Get('')
  async findAllRoutes(): Promise<any> {
    return await this.routesService.findAll();
  }

  @UseGuards(AuthGuard)
  @Get('/:id')
  async findOneRoute(@Param('id') id: string): Promise<any> {
    const numericId = parseInt(id, 10);
    if (isNaN(numericId)) {
      throw new NotFoundException(`ID inválido: ${id}`);
    }

    const route = await this.routesService.findOne(numericId);
    if (!route) {
      throw new NotFoundException(`Rota com ID ${id} não encontrada`);
    }
    return route;
  }

  //Só  para Admnistrador, entt têm que se por auth para Admin
  @Delete('/:id')
  @HttpCode(HttpStatus.OK)
  async deleteRoute(@Param('id') id: string): Promise<ResponseBody> {
    await this.routesService.deleteRoutes(Number(id));
    return {
      message: 'Rota deletada com Sucesso!',
      code: HttpStatus.OK,
    };
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
  async updateStatus(@Param('id') id: string): Promise<ResponseBody> {
    const update = await this.routesService.toggleStatus(Number(id));
    if (!update) {
      throw new NotFoundException(`Rota com ID ${id} não encontrada`);
    }
    return {
      message: 'Status da Rota atualizado com Sucesso!',
      code: HttpStatus.OK,
    };
  }
}
