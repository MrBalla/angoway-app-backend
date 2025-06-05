import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Inject,
  NotFoundException,
  Param,
  Patch,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { BusService } from './bus.service';
import { Bus, Prisma } from '@prisma/client';
import { AuthGuard } from 'src/auth/auth.guard';
import { busDetails } from 'src/types/bus.details';
import { updateBusDetails } from 'src/types/update-bus-details';
import { ResponseBody } from 'src/types/response.body';

@Controller('bus')
export class BusController {
  @Inject()
  private readonly busService: BusService;

  @Post('')
  async createBus(@Body() busData: Prisma.BusCreateInput): Promise<ResponseBody> {
    await this.busService.createBus(busData);
    return {
      message: 'Autocarro criado com Sucesso !',
      code: HttpStatus.CREATED,
    };
  }
  @Get('')
  async buses(): Promise<Bus[]> {
    return this.busService.buses();
  }
  @Get('with-route')
  async busesWithRoute(): Promise<Bus[]> {
    return this.busService.busesWithRoute();
  }

  @Get('dashboard-details/:driverId')
  @UseGuards(AuthGuard)
  async getBusDetails(
    @Param('driverId') driverId: string,
  ): Promise<busDetails | null> {
    const bus = await this.busService.provideBusDetails(Number(driverId));
    if (!bus || !bus.route) {
      return null;
    }
    const busDetails: busDetails = {
      status: bus?.status,
      currentLoad: bus?.currentLoad,
      capacity: bus?.capacity,
      route: {
        destination: bus?.route.destination,
        origin: bus?.route.origin,
        originLat: bus.route.originLatitude,
        originLng: bus.route.originLongitude,
        destinationLat: bus.route.destinationLatitude,
        destinationLng: bus.route.destinationLongitude,
        stops: bus?.route.routeStops.map((rs) => ({
          id: rs.stop.id,
          name: rs.stop.name,
          order: rs.order,
        })),
      },
    };

    return busDetails;
  }

  @Patch('dashboard-details/:id')
  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthGuard)
  async updateBusDetails(
    @Param('id') id: string,
    @Body() data: updateBusDetails,
  ): Promise<ResponseBody> {
    return (
      await this.busService.updateBusDetails(Number(id), data),
      {
        message: 'Dados Salvos',
        code: HttpStatus.OK,
      }
    );
  }

  @Put('assign-driver/:busId')
  @UseGuards(AuthGuard)
  @HttpCode(HttpStatus.OK)
  async assignDriverToBus(
    @Param('busId') busId: string,
    @Body('driverEmail') driverEmail: string,
  ): Promise<ResponseBody> {

    const numericId = parseInt(busId, 10);
    if (isNaN(numericId)) {
      return { code: HttpStatus.BAD_REQUEST, message: `ID inválido: ${busId}` };
    }

    const response = await this.busService.assignDriver(numericId, driverEmail);

    if (response) {
      return {
        code: HttpStatus.OK,
        message: 'Motorista Atribuido com Sucesso !',
      };
    }

    return {
      code: 500,
      message: 'Não foi possível atribuir o Motorista',
    };
  }

  @Patch('status/:driverId')
  @UseGuards(AuthGuard)
  @HttpCode(HttpStatus.NO_CONTENT)
  async changeBusStatus(
    @Param('driverId') driverId: string,
    @Body() body: Prisma.BusUpdateInput,
  ): Promise<ResponseBody> {
    const response = await this.busService.changeStatus(Number(driverId), body);

    if (response) {
      return {
        code: HttpStatus.OK,
        message: 'Status do autocarro alterado',
      };
    }

    return {
      code: HttpStatus.INTERNAL_SERVER_ERROR,
      message: 'Não foi possível alterar o status do autocarro',
    };
  }

  @Patch('route/:driverId/:routeId')
  @UseGuards(AuthGuard)
  @HttpCode(HttpStatus.OK)
  async changeBusRoute(
    @Param('driverId') driverId: string,
    @Param('routeId') newRouteId: string,
  ): Promise<Bus> {
    return await this.busService.changeRoute(
      Number(driverId),
      Number(newRouteId),
    );
  }

  @Get('count')
  @UseGuards(AuthGuard)
  async countBuses(): Promise<{ count: number }> {
    return await this.busService.countBuses();
  }

  @Get('pending')
  @UseGuards(AuthGuard)
  async pendingBuses(): Promise<{ count: number; buses: Bus[] }> {
    return await this.busService.pendingBuses();
  }

  @Get('count-inactive')
  @UseGuards(AuthGuard)
  async countInactiveBuses(): Promise<{ count: number; buses: Bus[] }> {
    return await this.busService.countInactiveBuses();
  }
  @Get('count-active')
  @UseGuards(AuthGuard)
  async countAvailableBuses(): Promise<{ count: number; buses: Bus[] }> {
    return await this.busService.countAvailableBuses();
  }
}
