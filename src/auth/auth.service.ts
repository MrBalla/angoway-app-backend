import {
  Inject,
  Injectable,
  UnauthorizedException,
  NotFoundException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';

import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { DriverService } from 'src/driver/driver.service';

@Injectable()
export class AuthService {
  @Inject()
  private readonly userService: UserService;
  @Inject()
  private readonly driverService: DriverService;
  @Inject()
  private readonly jwtService: JwtService;

  async signin(
    Params: Prisma.UserCreateInput,
  ): Promise<{ access_token: string }> {
    //verificar se o usuario existe
    const user = await this.userService.user({ number: Params.number });
    if (!user)
      throw new NotFoundException(
        'Não encontramos nenhum usuário com estes dados !',
      );

    //verificar se a senha está correta
    const passwordMatch = await bcrypt.compare(Params.password, user.password);
    if (!passwordMatch)
      throw new UnauthorizedException(
        'Verifique a sua senha e Tente novamente !',
      );
    //retornar o usuario
    const payload = { sub: user.id, number: user.number };

    return { access_token: await this.jwtService.signAsync(payload) };
  }

  async driverSignin(
    Params: Prisma.DriverCreateInput,
  ): Promise<{ access_token: string }> {
    
    const driver = await this.driverService.driver({ phone: Params.phone });
    if (!driver)
      throw new NotFoundException(
        'Nenhum motorista com estes dados !',
      );

    const passwordMatch = await bcrypt.compare(
      Params.password,
      driver.password,
    );
    if (!passwordMatch)
      throw new UnauthorizedException(
        'Verifique a senha e Tente novamente !',
      );
    //retornar o usuario
    const payload = { sub: driver.id, phone: driver.phone, busId: driver.assignedBusId || null };

    return { access_token: await this.jwtService.signAsync(payload) };
  }
}
