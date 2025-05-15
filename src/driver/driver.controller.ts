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
import { DriverService } from './driver.service';
import { Driver, Prisma } from '@prisma/client';

@Controller('driver')
export class DriverController {
    @Inject()
    private readonly driverService: DriverService;

    @Get('')
    async drivers(): Promise<Driver[]>{
        return (await this.driverService.allDrivers());
    }
    @Get('dashboard-details')
    async driversDetails(): Promise<number>{
        return (0);
    }
    @Get('recent/dashboard-details')
    async recentDriversDetails(@Query('created_before') data?: string) : Promise<number>{
        return (0);
    }

    @Get('bus/:driverId')
    async getDriverBus(@Param('driverId') driverId: string): Promise<number>{
        return (0);
    }

    @Get('count')
    async countDrivers(): Promise<{ count: number }> {
        const count = await this.driverService.countDrivers();
        return ({ count });
    }

    @Get('count-active')
    async countActiveDrivers() :Promise<{count: number}> {
        const count = await this.driverService.countActiveDrivers();
        return ({ count })
    }
    @Get('count-inactive')
    async countInactiveDrivers() :Promise<{ count:number  }>{
        const count = await this.driverService.countInactiveDrivers();
        return ({ count });
    }
    @Get('count-bystatus')
    async countByStatus() :Promise<{ available: number, on_route: number, offline: number }>{
        return (this.driverService.countDriversByStatus());
    }
}
