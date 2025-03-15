import { Inject, Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class UserService {

    @Inject()
    private readonly prisma:PrismaService

    //Criando o usuario
    async createUser(data: Prisma.UserCreateInput){
        return this.prisma.user.create({data})
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
    
      //Deletar Usuarop
      async deleteUser(where: Prisma.UserWhereUniqueInput): Promise<User> {
        return this.prisma.user.delete({
          where,
        });
      }

      //Acredito que não há necessidade de mostrar todos os usuarios acho se have 
      //será na API do ADMIN
}
