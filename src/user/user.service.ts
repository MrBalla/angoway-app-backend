import {
  Inject,
  Injectable,
  HttpStatus,
} from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';
import * as bcrypt from 'bcrypt';
import { ResponseBody } from 'src/types/response.body';
@Injectable()
export class UserService {
  @Inject()
  private readonly prisma: PrismaService;

  //Criando o usuario
  async createUser(data: Prisma.UserCreateInput): Promise<ResponseBody | User> {
    const isEmailUsed = await this.user({ email: data.email });
    if (isEmailUsed) {
      return {
        code: HttpStatus.UNAUTHORIZED,
        message: 'Já encontramos uma conta com este e-mail !',
      };
    }

    const isNumberUsed = await this.user({ number: data.number });
    if (isNumberUsed) {
      return {
        code: HttpStatus.UNAUTHORIZED,
        message: 'Já encontramos uma conta com este número !',
      };
    }

    const hashPassword = await bcrypt.hash(data.password, 10);
    return this.prisma.user.create({
      data: { ...data, password: hashPassword },
    });
  }

  // Get User Profile Details
  async userProfile(userId: number) {
    const user = await this.prisma.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        id: true,
        name: true,
        url_foto_de_perfil: true,
      },
    });

    if (!user) {
      return {
        code: HttpStatus.NOT_FOUND,
        message: 'Não encontramos este usuário !',
      };
    }

    return user;
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
    data: { password: string };
  }): Promise<User | ResponseBody> {
    const { where, data } = params;

    if (typeof data.password !== 'string') {
      return {
        code: HttpStatus.BAD_REQUEST,
        message: 'A senha deve ser uma string',
      };
    }
    const hashPassword = await bcrypt.hash(data.password, 10);
    return this.prisma.user.update({
      data: { password: hashPassword },
      where,
    });
  }

  async deleteUser(where: Prisma.UserWhereUniqueInput): Promise<User> {
    return this.prisma.user.delete({
      where,
    });
  }
}
