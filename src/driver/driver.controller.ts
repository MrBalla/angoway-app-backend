import { Body, Controller, Delete, Get, HttpCode, HttpStatus, NotFoundException, Param, Patch, Post } from '@nestjs/common';
import { DriverService } from './driver.service';
import { Prisma } from '@prisma/client';
import { ResponseBody } from 'src/types/response.body';
import { DriverModule } from './driver.module';

@Controller('driver')
export class DriverController {
    constructor(private readonly driverService: DriverService) {}


    @Get('/all')
    async getAllDrivers(): Promise<Omit<DriverModule, 'password'>[]> {
        const drivers = await this.driverService.allDrivers();
        return drivers.map(driver => {
            const { password, ...driverWithoutPassword } = driver;
            return driverWithoutPassword;
        });
    }
    
    @Post('')
    @HttpCode(HttpStatus.CREATED)
    async createDriver(@Body() driverData: Prisma.DriverCreateInput): Promise<ResponseBody> {
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

    @Get('/available')
    async getAvailableDrivers(): Promise<Omit<DriverModule, 'password'>[]> {
        const drivers = await this.driverService.getDriversAvailable();
        return drivers.map(driver => {
            const { password, ...driverWithoutPassword } = driver;
            return driverWithoutPassword;
        });
    }

    @Get('/working')
    async getWorkingDrivers(): Promise<Omit<DriverModule, 'password'>[]> {
        const drivers = await this.driverService.getDriversOnRoute();
        return drivers.map(driver => {
            const { password, ...driverWithoutPassword } = driver;
            return driverWithoutPassword;
        });
    }
    @Get('count-active')
    async countActiveDrivers() :Promise<{ count: number }>{
        return await this.driverService.countActiveDrivers();
    }

    @Get('count-inactive')
    async countInactiveDrivers(): Promise<{ count: number }>{
        return await this.driverService.countInactiveDrivers();
    }

    @Post('atribuir-autocarro/:id')
    @HttpCode(HttpStatus.OK)
    async assignBusToDriver(@Param('id') id: string, @Body('busNia') busNia: string): Promise<DriverModule> {
        const driver = await this.driverService.assignBus(Number(id), busNia);
        return driver;
    }

  @Patch('/update/:id')
  @HttpCode(HttpStatus.OK)
  async updateDriver(@Param('id') id: string, @Body() updateDriverData: Prisma.DriverUpdateInput,): Promise<ResponseBody> {
    const driver = await this.driverService.updateDriver({
      where: { id: Number(id) },
      data: updateDriverData,
    });
    const { password, ...driverWithoutPassword } = driver;
    return {
      message: 'Motorista atualizado com sucesso',
      code: HttpStatus.OK,
    };
  }

  @Patch('/password/:id')
  @HttpCode(HttpStatus.OK)
  async updatePassword(
    @Param('id') id: string,
    @Body() updatePasswordData: { password: string }): Promise<ResponseBody> {
    const driver = await this.driverService.updatePassword({
      where: { id: Number(id) },
      data: { password: updatePasswordData.password },
    });
    const { password, ...driverWithoutPassword } = driver;
    return {
      message: 'Senha atualizada com sucesso',
      code: HttpStatus.OK,
    };
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.OK)
  async deleteDriver(@Param('id') id: string): Promise<ResponseBody> {
    await this.driverService.deleteDriver({ id: Number(id) });
    return {
      message: 'Motorista deletado com sucesso',
      code: HttpStatus.OK,
    };
  }

  @Patch('/status/:id')
  @HttpCode(HttpStatus.OK)
  async updateStatus( @Param('id') id: string, @Body() updateStatusData: 
  { status: 'AVAILABLE' | 'ON_ROUTE' | 'OFFLINE' } ): Promise<ResponseBody> {
    const driver = await this.driverService.updateStatus(Number(id), updateStatusData.status);
    if (!driver) {
      throw new NotFoundException(`Motorista com ID ${id} não encontrado`);
    }
    const { password, ...driverWithoutPassword } = driver;
    return {
      message: 'Status do motorista atualizado com sucesso',
      code: HttpStatus.OK,
    };
  }

  @Patch('/verify/:id')
  @HttpCode(HttpStatus.OK)
  async verifyDriver(@Param('id') id: string): Promise<ResponseBody> {
    const driver = await this.driverService.verifyDriver({ id: Number(id) });
    const { password, ...driverWithoutPassword } = driver;
    return {
      message: `Motorista ${driver.isVerified ? 'verificado' : 'desverificado'} com sucesso`,
      code: HttpStatus.OK,
    };
  }

  @Patch('/unassign-bus/:id')
  @HttpCode(HttpStatus.OK)
  async unassignBus(@Param('id') id: string): Promise<ResponseBody> {
    const driver = await this.driverService.unassignBus(Number(id));
    const { password, ...driverWithoutPassword } = driver;
    return {
      message: 'Atribuição de autocarro removida com sucesso',
      code: HttpStatus.OK,
    };
  }


//Acho que não vamos usar, mas deixa só deixar aqui por preucação
  @Patch('/location/:id')
  @HttpCode(HttpStatus.OK)
  async updateLocation(
    @Param('id') id: string,
    @Body() updateLocationData: { latitude: number; longitude: number },
  ): Promise<ResponseBody> {
    const driver = await this.driverService.updateLocation(
      Number(id),
      updateLocationData.latitude,
      updateLocationData.longitude,
    );
    const { password, ...driverWithoutPassword } = driver;
    return {
      message: 'Localização do motorista atualizada com sucesso',
      code: HttpStatus.OK,
    };
  }

}
