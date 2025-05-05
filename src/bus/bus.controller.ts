import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Inject,
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
  async createBus(@Body() busData: Prisma.BusCreateInput): Promise<void> {
    await this.busService.createBus(busData);
  }
  @Get('')
  async buses(): Promise<Bus[]> {
    return this.busService.buses();
  }

  @Get('dashboard-details')
  @UseGuards(AuthGuard)
  async getBusDetails(@Body() driverId: number): Promise<busDetails | null> {
    const bus = await this.busService.provideBusDetails(driverId);
    const busDetails: busDetails = {
      status: bus?.status,
      currentLoad: bus?.currentLoad,
      capacity: bus?.capacity,
      numberOfStops: 3, //replace with an attribue that holds the distance(in km) from point A to B
      route: {
        destination: bus?.route.destination,
        estimatedTime: bus?.route.estimatedTime,
        origin: bus?.route.origin,
        stops: bus?.route.stops,
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

  @Patch('status/:driverId')
  @UseGuards(AuthGuard)
  @HttpCode(HttpStatus.NO_CONTENT)
  async changeBusStatus(
    @Param('driverId') driverId: string,
    @Body() body: Prisma.BusUpdateInput,
  ): Promise<Bus> {
    return await this.busService.changeStatus(Number(driverId), body);
  }

  @Patch('route/:driverId/:routeId')
  @UseGuards(AuthGuard)
  @HttpCode(HttpStatus.OK)
  async changeBusRoute(
    @Param("driverId") driverId: string,
    @Param("routeId") newRouteId: string ,
  ): Promise<Bus> {
    return await this.busService.changeRoute(Number(driverId), Number(newRouteId));
  }
}
