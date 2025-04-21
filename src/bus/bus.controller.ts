import { Body, Controller, Get, Inject, Post, UseGuards } from '@nestjs/common';
import { BusService } from './bus.service';
import { Bus, Prisma } from '@prisma/client';
import { AuthGuard } from 'src/auth/auth.guard';
import { busDetails } from 'src/types/bus.details';

@Controller('bus')
export class BusController {
    @Inject()
    private readonly busService: BusService;

    @Post('')
    async createBus(@Body() busData: Prisma.BusCreateInput):Promise<void>{
        await this.busService.createBus(busData);
    }
    @Get('')
    async buses(): Promise<Bus[]>{
        return this.busService.buses();
    }

    @Get('bus-details')
    @UseGuards(AuthGuard)
    async getBusDetails(@Body() driverId: number): Promise<Bus | null>{
        return this.busService.provideBusDetails(driverId);
    }

}
