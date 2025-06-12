import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Patch,
  Delete,
  HttpCode,
  HttpStatus,
  UseGuards,
  Req,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { UserService } from './user.service';
import { ResponseBody } from 'src/types/response.body';
import { AuthGuard } from 'src/auth/auth.guard';
import { User } from 'src/types/User';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('')
  @HttpCode(HttpStatus.CREATED)
  async signupUser(@Body() userData: Omit<User,"id">): Promise<ResponseBody> {
    const response = await this.userService.createUser(userData);

    if (response) {
      return {
        message: 'Usuário criado com Sucesso !',
        code: HttpStatus.CREATED,
      }
    }

    return response
  }

  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthGuard)
  @Patch('/:id')
  async updateUser(
    @Param('id') id: string,
    @Body() userData: Prisma.UserUpdateInput,
  ): Promise<ResponseBody> {
    const numericId = parseInt(id, 10);
    if (isNaN(numericId)) {
      return {
        code: HttpStatus.BAD_REQUEST,
        message: `ID inválido: ${id}`,
      };
    }

    const user = await this.userService.updateUser({
      where: { id: numericId },
      data: userData,
    });
    if (!user) {
      return {
        code: HttpStatus.NOT_FOUND,
        message: `Não encontramos este usuário`
      }
    }

    return {
      code:HttpStatus.OK,
      message: "Dados Atualizados."
    }
  }

  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthGuard)
  @Patch('profile/:id')
  async updatePassword(
    @Param('id') id: string,
    @Body() password: Prisma.UserUpdateInput,
  ): Promise<ResponseBody> {
    const numericId = parseInt(id, 10);
    if (isNaN(numericId)) {
      return {
        code: HttpStatus.BAD_REQUEST,
        message: `ID inválido: ${id}`,
      };
    }

    const user = await this.userService.updatePassword({
      where: { id: numericId },
      data: { password: password.password as string },
    });

    if (!user) {
      return {
        code: HttpStatus.NOT_FOUND,
        message: `Este usuário não Existe !`,
      };
    }

    return {
      message: 'Senha alterada com Sucesso !',
      code: HttpStatus.OK,
    };
  }

  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthGuard)
  @Delete('/:id')
  async deleteUser(@Param('id') id: string): Promise<ResponseBody> {
    const numericId = parseInt(id, 10);
    if (isNaN(numericId)) {
      return {
        code: HttpStatus.BAD_REQUEST,
        message: `ID inválido: ${id}`,
      };
    }

    await this.userService.deleteUser({ id: numericId });
    return {
      message: ' Usuário deletado com Sucesso !',
      code: HttpStatus.OK,
    };
  }

  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthGuard)
  @Get('me')
  async profileDetails(@Req() req: Request) {
    const userId = req['user']?.sub;
    if (!userId) {
      return {
        code: HttpStatus.UNAUTHORIZED,
        message: 'Usuário não autenticado.',
      };
    }

    const numericId = parseInt(userId, 10);
    if (isNaN(numericId) || !userId) {
      return {
        code: HttpStatus.BAD_REQUEST,
        message: `ID inválido: ${userId}`,
      };
    }

    return this.userService.userProfile(numericId);
  }

  @UseGuards(AuthGuard)
  @Get('/:id')
  async getUserById(
    @Param('id') id: string,
  ): Promise<Omit<User, 'password'> | ResponseBody> {
    const numericId = parseInt(id, 10);
    if (isNaN(numericId)) {
      return {
        code: HttpStatus.BAD_REQUEST,
        message: `ID inválido: ${id}`,
      };
    }

    const user = await this.userService.user({ id: numericId });
    if (!user) {
      return {
        code: HttpStatus.NOT_FOUND,
        message: `Usuário com ID ${id} não encontrado`,
      };
    }

    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }
}
