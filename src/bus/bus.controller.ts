import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { BusService } from './bus.service';
import { Bus, Prisma } from '@prisma/client';

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

}
