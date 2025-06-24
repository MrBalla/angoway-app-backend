import {
  Inject,
  Injectable,
  UnauthorizedException,
  NotFoundException,
  HttpStatus,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';

import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { DriverService } from 'src/driver/driver.service';
import { BusService } from 'src/bus/bus.service';
import { ResponseBody } from 'src/types/response.body';

@Injectable()
export class AuthService {
  @Inject()
  private readonly userService: UserService;
  @Inject()
  private readonly driverService: DriverService;
  @Inject()
  private readonly busService: BusService;
  @Inject()
  private readonly jwtService: JwtService;

  async signin(
    Params: Prisma.UserCreateInput,
  ): Promise<ResponseBody | { access_token: string }> {
    //verificar se o usuario existe
    const user = await this.userService.user({ number: Params.number });
    if (!user)
      return {
        code: HttpStatus.NOT_FOUND,
        message: 'Não encontramos nenhum usuário com estes dados !',
      };

    const passwordMatch = await bcrypt.compare(Params.password, user.password);
    if (!passwordMatch)
      return {
        code: HttpStatus.UNAUTHORIZED,
        message: 'Verifique a sua senha e Tente novamente !',
      };

    const payload = { sub: user.id, number: user.number };

    return { access_token: await this.jwtService.signAsync(payload) };
  }

  async driverSignin(
    Params: Prisma.DriverCreateInput,
  ): Promise<ResponseBody | { access_token: string }> {
    const driver = await this.driverService.driver({ phone: Params.phone });
    if (!driver) {
      return {
        code: HttpStatus.NOT_FOUND,
        message: 'Nenhum motorista com estes dados !',
      };
    }

    const assignedBus = await this.busService.findBusByDriverId(driver.id);
    if (!assignedBus) {
      return {
        code: HttpStatus.NOT_FOUND,
        message: 'Nenhum ônibus atribuído a este motorista !',
      };
    }
    console.log(Params.password, driver.password);
    const passwordMatch = await bcrypt.compare(
      Params.password,
      driver.password,
    );
    if (!passwordMatch) {
      return {
        code: HttpStatus.UNAUTHORIZED,
        message: 'Verifique a senha e Tente novamente !',
      };
    }

    // initializes driver and driver's bus
    this.busService.updateBus(assignedBus.id, {
      currentLoad: 0,
    })
    this.driverService.updateDriver({
      where: { id: driver.id },
      data: {
        lastLogin: new Date()
      }
    })

    const payload = {
      sub: driver.id,
      phone: driver.phone,
      busId: assignedBus.id || null,
    };

    return { access_token: await this.jwtService.signAsync(payload) };
  }
}
