import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  NotFoundException,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { DriverService } from './driver.service';
import { Driver, Prisma } from '@prisma/client';
import { ResponseBody } from 'src/types/response.body';
import { DriverModule } from './driver.module';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('driver')
export class DriverController {
  constructor(private readonly driverService: DriverService) {}

  @Post('')
  @UseGuards(AuthGuard)
  @HttpCode(HttpStatus.CREATED)
  async createDriver(
    @Body() driverData: Prisma.DriverCreateInput,
  ): Promise<ResponseBody> {
    await this.driverService.createDriver(driverData);
    return {
      message: 'Motorista criado com Sucesso !',
      code: HttpStatus.CREATED,
    };
  }

  @Get('/all')
  @UseGuards(AuthGuard)
  async getAllDrivers(): Promise<Omit<Driver, 'password'>[]> {
    const drivers = await this.driverService.allDrivers();
    return drivers.map((driver) => {
      const { password, ...driverWithoutPassword } = driver;
      return driverWithoutPassword;
    });
  }

  @Get('/recent')
  @UseGuards(AuthGuard)
  async getAllRecentDrivers(): Promise<Omit<Driver, 'password'>[]> {
    const drivers = await this.driverService.allRecentDrivers();
    return drivers.map((driver) => {
      const { password, ...driverWithoutPassword } = driver;
      return driverWithoutPassword;
    });
  }

  @Get('count-active')
  @UseGuards(AuthGuard)
  async countActiveDrivers(): Promise<{ count: number }> {
    return await this.driverService.countActiveDrivers();
  }

  @Get('count')
  @UseGuards(AuthGuard)
  async countDrivers(): Promise<{ count: number }> {
    return await this.driverService.countDrivers();
  }

  @Get('count-inactive')
  @UseGuards(AuthGuard)
  async countInactiveDrivers(): Promise<{ count: number }> {
    return await this.driverService.countInactiveDrivers();
  }

  @Get('count-pending')
  @UseGuards(AuthGuard)
  async countPendingDrivers(): Promise<{ count: number; drivers: Driver[] }> {
    return await this.driverService.countPendingDrivers();
  }

  @Get('count-recent')
  @UseGuards(AuthGuard)
  async countRecentDrivers(): Promise<{ count: number }> {
    return await this.driverService.countRecentDrivers();
  }

  @Get('count-effectives')
  @UseGuards(AuthGuard)
  async countEffectivatedDrivers(): Promise<{ count: number }> {
    return await this.driverService.countEffectivatedDrivers();
  }

  @Get('bus-assigned')
  @UseGuards(AuthGuard)
  async getAssignedBusDrivers() {
    const drivers = await this.driverService.assignedBusDriver();
    return drivers.map((driver) => {
      const { ...driverWithoutPassword } = driver;
      return driverWithoutPassword;
    });
  }

  @Get('/:id')
  @UseGuards(AuthGuard)
  async getDriverById(
    @Param('id') id: string,
  ): Promise<ResponseBody | Omit<Driver, 'password'>> {
    const numericId = parseInt(id, 10);
    if (isNaN(numericId)) {
      return {
        code: HttpStatus.BAD_REQUEST,
        message: `ID inválido: ${id}`,
      };
    }
    const driver = await this.driverService.driver({
      id: numericId,
    });
    if (!driver) {
      return {
        code: HttpStatus.NOT_FOUND,
        message: `Motorista com ID ${id} não encontrado`,
      };
    }
    const { password, ...driverWithoutPassword } = driver;
    return driverWithoutPassword;
  }

  @Get('/available')
  @UseGuards(AuthGuard)
  async getAvailableDrivers(): Promise<Omit<Driver, 'password'>[]> {
    const drivers = await this.driverService.getDriversAvailable();
    return drivers.map((driver) => {
      const { password, ...driverWithoutPassword } = driver;
      return driverWithoutPassword;
    });
  }

  @Get('/working')
  @UseGuards(AuthGuard)
  async getWorkingDrivers(): Promise<Omit<Driver, 'password'>[]> {
    const drivers = await this.driverService.getDriversOnRoute();
    return drivers.map((driver) => {
      const { password, ...driverWithoutPassword } = driver;
      return driverWithoutPassword;
    });
  }

  @Post('assign-bus/:id')
  @UseGuards(AuthGuard)
  @HttpCode(HttpStatus.OK)
  async assignBusToDriver(
    @Param('id') id: string,
    @Body('busNia') busNia: string,
  ): Promise<ResponseBody> {
    const numericId = parseInt(id, 10);
    if (isNaN(numericId)) {
      return { code: HttpStatus.BAD_REQUEST, message: `ID inválido: ${id}` };
    }

    const response = await this.driverService.assignBus(numericId, busNia);

    if (response) {
      return {
        code: HttpStatus.OK,
        message: 'Autocarro Atribuido com Sucesso !',
      };
    }

    return {
      code: HttpStatus.INTERNAL_SERVER_ERROR,
      message: 'Não foi possível atribuir o autocarro',
    };
  }

  @Patch('/update/:id')
  @UseGuards(AuthGuard)
  @HttpCode(HttpStatus.OK)
  async updateDriver(
    @Param('id') id: string,
    @Body() updateDriverData: Prisma.DriverUpdateInput,
  ): Promise<ResponseBody> {
    const numericId = parseInt(id, 10);
    if (isNaN(numericId)) {
      return { code: HttpStatus.BAD_REQUEST, message: `ID inválido: ${id}` };
    }
    const driver = await this.driverService.updateDriver({
      where: { id: numericId },
      data: updateDriverData,
    });

    return {
      message: 'Motorista atualizado com sucesso',
      code: HttpStatus.OK,
    };
  }

  @Patch('/password/:id')
  @UseGuards(AuthGuard)
  @HttpCode(HttpStatus.OK)
  async updatePassword(
    @Param('id') id: string,
    @Body() updatePasswordData: { password: string },
  ): Promise<ResponseBody> {
    const numericId = parseInt(id, 10);
    if (isNaN(numericId)) {
      return { code: HttpStatus.BAD_REQUEST, message: `ID inválido: ${id}` };
    }

    const driver = await this.driverService.updatePassword({
      where: { id: numericId },
      data: { password: updatePasswordData.password },
    });
    const { password, ...driverWithoutPassword } = driver;
    return {
      message: 'Senha atualizada com sucesso',
      code: HttpStatus.OK,
    };
  }

  @Delete('/:id')
  @UseGuards(AuthGuard)
  @HttpCode(HttpStatus.OK)
  async deleteDriver(@Param('id') id: string): Promise<ResponseBody> {
    const numericId = parseInt(id, 10);
    if (isNaN(numericId)) {
      return { code: HttpStatus.BAD_REQUEST, message: `ID inválido: ${id}` };
    }
    await this.driverService.deleteDriver({ id: numericId });
    return {
      message: 'Motorista deletado com sucesso',
      code: HttpStatus.OK,
    };
  }

  @Patch('/status/:id')
  @UseGuards(AuthGuard)
  @HttpCode(HttpStatus.OK)
  async updateStatus(
    @Param('id') id: string,
    @Body() updateStatusData: { status: 'AVAILABLE' | 'ON_ROUTE' | 'OFFLINE' },
  ): Promise<ResponseBody> {
    const numericId = parseInt(id, 10);
    if (isNaN(numericId)) {
      return { code: HttpStatus.BAD_REQUEST, message: `ID inválido: ${id}` };
    }
    const driver = await this.driverService.updateStatus(
      numericId,
      updateStatusData.status,
    );
    if (!driver) {
      return {
        code: HttpStatus.NOT_FOUND,
        message: `Motorista com ID ${id} não encontrado`,
      };
    }
    const { password, ...driverWithoutPassword } = driver;
    return {
      message: 'Status do motorista atualizado com sucesso',
      code: HttpStatus.OK,
    };
  }

  @Patch('/verify/:id')
  @UseGuards(AuthGuard)
  @HttpCode(HttpStatus.OK)
  async verifyDriver(@Param('id') id: string): Promise<ResponseBody> {
    const numericId = parseInt(id, 10);
    if (isNaN(numericId)) {
      return { code: HttpStatus.BAD_REQUEST, message: `ID inválido: ${id}` };
    }
    const driver = await this.driverService.verifyDriver({
      id: numericId,
    });
    return {
      message: `Motorista ${driver.isVerified ? 'verificado' : 'desverificado'} com sucesso`,
      code: HttpStatus.OK,
    };
  }

  @Patch('/unassign-bus/:id')
  @UseGuards(AuthGuard)
  @HttpCode(HttpStatus.OK)
  async unassignBus(@Param('id') id: string): Promise<ResponseBody> {
    const numericId = parseInt(id, 10);
    if (isNaN(numericId)) {
      return { code: HttpStatus.BAD_REQUEST, message: `ID inválido: ${id}` };
    }
    const driver = await this.driverService.unassignBus(numericId);
    return {
      message: 'Atribuição de autocarro removida com sucesso',
      code: HttpStatus.OK,
    };
  }

  //Acho que não vamos usar, mas deixa só deixar aqui por preucação
  @Patch('/location/:id')
  @UseGuards(AuthGuard)
  @HttpCode(HttpStatus.OK)
  async updateLocation(
    @Param('id') id: string,
    @Body() updateLocationData: { latitude: number; longitude: number },
  ): Promise<ResponseBody> {
    const numericId = parseInt(id, 10);
    if (isNaN(numericId)) {
      return { code: HttpStatus.BAD_REQUEST, message: `ID inválido: ${id}` };
    }
    const driver = await this.driverService.updateLocation(
      numericId,
      updateLocationData.latitude,
      updateLocationData.longitude,
    );
    const { password, ...driverWithoutPassword } = driver;
    return {
      message: 'Localização do motorista atualizada com sucesso',
      code: HttpStatus.OK,
    };
  }

  @Get('location/:id')
  @UseGuards(AuthGuard)
  async getLocation(
    @Param('id') id: string,
  ): Promise<ResponseBody | { latitude: number; longitude: number }> {
    const numericId = parseInt(id, 10);
    if (isNaN(numericId)) {
      return { code: HttpStatus.BAD_REQUEST, message: `ID inválido: ${id}` };
    }
    return await this.driverService.getLocation(numericId);
  }
}
