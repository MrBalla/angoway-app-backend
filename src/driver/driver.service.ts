import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { Driver, Prisma } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class DriverService {
  @Inject()
  private readonly prisma: PrismaService;

  //Criando o driver
  async createDriver(data: Prisma.DriverCreateInput) {
    const isEmailUsed = await this.driver({ email: data.email });
    if (isEmailUsed)
      throw new BadRequestException(
        'Já encontramos uma conta com este e-mail !',
      );

    const isNumberUsed = await this.driver({ phone: data.phone });
    if (isNumberUsed)
      throw new BadRequestException(
        'Já encontramos uma conta com este número !',
      );

    const hashPassword = await bcrypt.hash(data.password, 10);
    return this.prisma.driver.create({
      data: { ...data, password: hashPassword },
    });
  }

  //Pegar drivers
  async driver(
    driverWhereUniqueInput: Prisma.DriverWhereUniqueInput,
  ): Promise<Driver | null> {
    return this.prisma.driver.findUnique({
      where: driverWhereUniqueInput,
    });
  }

  //Editar driver
  async updateDriver(params: {
    where: Prisma.DriverWhereUniqueInput;
    data: Prisma.DriverUpdateInput;
  }): Promise<Driver> {
    const { where, data } = params;
    return this.prisma.driver.update({
      data,
      where,
    });
  }

  async updatePassword(params: {
    where: Prisma.DriverWhereUniqueInput;
    data: { password: string };
  }): Promise<Driver> {
    const { where, data } = params;

    if (typeof data.password !== 'string') {
      throw new BadRequestException('A senha deve ser uma string');
    }
    const hashPassword = await bcrypt.hash(data.password, 10);
    return this.prisma.driver.update({
      data: { password: hashPassword },
      where,
    });
  }

  async deleteUser(where: Prisma.DriverWhereUniqueInput): Promise<Driver> {
    return this.prisma.driver.delete({
      where,
    });
  }
}
