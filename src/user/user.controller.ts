import { Controller, Get, Param, Post, Body, Put, Delete,HttpCode, HttpStatus, UseGuards } from '@nestjs/common';
import { Prisma, User as UserModel } from '@prisma/client';
import { UserService } from './user.service';
import { NotFoundException } from '@nestjs/common';
import { ResponseBody } from 'src/types/response.body';
import { NeedAuth } from '../../swagger/validate.decorator';


@Controller('user')
export class UserController {
    
  constructor(private readonly userService: UserService) {} 
  @Post('')
  @HttpCode(HttpStatus.CREATED)
   async signupUser(userData: Prisma.UserCreateInput): Promise<ResponseBody> {
    await this.userService.createUser(userData);
    return ({
        message: "Usuário criado com Sucesso !",
        code:HttpStatus.CREATED
    });
  }

  @NeedAuth()
  @Get('/:id')
  async getUserById(@Param('id') id: string): Promise<Omit<UserModel, 'password'>> {
    const user = await this.userService.user({ id: Number(id) });
    if (!user) {
        throw new NotFoundException(`Usuário com ID ${id} não encontrado`);
    }
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }

  @HttpCode(HttpStatus.OK)
  @NeedAuth()
  @Put('/:id')
  async updateUser(@Param('id') id: string, @Body() userData:Prisma.UserUpdateInput
    ):Promise<void>{
    const user= await this.userService.updateUser({ 
      where:{id: Number(id)},
      data:userData  
    })
  if(!user){
    throw new NotFoundException(`Usuário com ID ${id} não encontrado`);
  }
  } 
  
  @HttpCode(HttpStatus.OK)
  @NeedAuth()
  @Put('profile/:id')
  async updatePassword(
    @Param('id') id: string,
    @Body() password: Prisma.UserUpdateInput,
  ): Promise<ResponseBody> {
    const user = await this.userService.updatePassword({
      where: { id: Number(id) },
      data: { password: password.password as string },
    });

    if (!user) {
      throw new NotFoundException(`Este usuário não Existe !`);
    }

    return {
      message: "Senha alterada com Sucesso !",
      code:HttpStatus.OK
    }
  }

  @HttpCode(HttpStatus.OK)
  @NeedAuth()
  @Delete('/:id')
  async deleteUser(@Param('id') id: string): Promise<ResponseBody> {
    await this.userService.deleteUser({ id: Number(id) });
     return {
      message: " Usuário deletado com Sucesso !",
      code:HttpStatus.OK
    }
  }
}
