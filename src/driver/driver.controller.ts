import { Controller, Get, HttpCode, HttpStatus, NotFoundException, Param, Post } from '@nestjs/common';
import { DriverService } from './driver.service';
import { Prisma } from '@prisma/client';
import { ResponseBody } from 'src/types/response.body';
import { DriverModule } from './driver.module';

@Controller('driver')
export class DriverController {
    constructor(private readonly driverService: DriverService) {}

    @Post('')
    @HttpCode(HttpStatus.CREATED)
    async createDriver(driverData: Prisma.DriverCreateInput): Promise<ResponseBody> {
        await this.driverService.createDriver(driverData);
        return ({
            message: "Motorista criado com Sucesso !",
            code:HttpStatus.CREATED
        });
    }

    @Get('/:id')
    async getDriverById(@Param('id') id: string): Promise<Omit<DriverModule, 'password'>> {
        const driver = await this.driverService.driver({ id: Number(id) });
        if (!driver) {
            throw new NotFoundException(`Motorista com ID ${id} não encontrado`);
        }
        const { password, ...driverWithoutPassword } = driver;
        return driverWithoutPassword;
    }

    @Get('/all')
    async getAllDrivers(): Promise<Omit<DriverModule, 'password'>[]> {
        const drivers = await this.driverService.allDrivers();
        return drivers.map(driver => {
            const { password, ...driverWithoutPassword } = driver;
            return driverWithoutPassword;
        });
    }

    @Get('/available')
    async getAvailableDrivers(): Promise<Omit<DriverModule, 'password'>[]> {
        const drivers = await this.driverService.getDriversAvailable();
        return drivers.map(driver => {
            const { password, ...driverWithoutPassword } = driver;
            return driverWithoutPassword
        });
    }

    @Get('/working')
    async getWorkingDrivers(): Promise<Omit<DriverModule, 'password'>[]> {
        const drivers = await this.driverService.getDriversOnRoute();
        return drivers.map(driver => {
            const { password, ...driverWithoutPassword } = driver;
            return driver
        });
    }

    @Post('atribuir-autocarro/:id')
    @HttpCode(HttpStatus.OK)
    async assignBusToDriver(@Param('id') id: string, @Param('busNia') busNia: string): Promise<DriverModule> {
        const driver = await this.driverService.assignBus(Number(id), busNia);
        return driver;
    }

    

}
