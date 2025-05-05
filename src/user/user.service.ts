import { Inject, Injectable, BadRequestException } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';
import * as bcrypt from 'bcrypt';
@Injectable()
export class UserService {
  @Inject()
  private readonly prisma: PrismaService;

  //Criando o usuario
  async createUser(data: Prisma.UserCreateInput) {
    const isEmailUsed = await this.user({ email: data.email });
    if (isEmailUsed)
      throw new BadRequestException(
        'Já encontramos uma conta com este e-mail !',
      );

    const isNumberUsed = await this.user({ number: data.number });
    if (isNumberUsed)
      throw new BadRequestException(
        'Já encontramos uma conta com este número !',
      );

    const hashPassword = await bcrypt.hash(data.password, 10);
    return this.prisma.user.create({
      data: { ...data, password: hashPassword },
    });
  }

  //Pegar Usuarios
  async user(
    userWhereUniqueInput: Prisma.UserWhereUniqueInput,
  ): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: userWhereUniqueInput,
    });
  }

  //Editar Usuario
  async updateUser(params: {
    where: Prisma.UserWhereUniqueInput;
    data: Prisma.UserUpdateInput;
  }): Promise<User> {
    const { where, data } = params;
    return this.prisma.user.update({
      data,
      where,
    });
  }

  async updatePassword(params: {
    where: Prisma.UserWhereUniqueInput;
    data: Prisma.UserUpdateInput;
  }): Promise<User> {
    const { where, data } = params;
    const hashPassword = await bcrypt.hash(data.password, 10);
    return this.prisma.user.update({
      data,
      where,
    });
  }

  //Deletar Usuarop
  async deleteUser(where: Prisma.UserWhereUniqueInput): Promise<User> {
    return this.prisma.user.delete({
      where,
    });
  }

  //Acredito que não há necessidade de mostrar todos os usuarios acho se have
  //será na API do ADMIN
}
