import { Controller, Get, Param, Post, Body, Put, Delete,HttpCode, HttpStatus } from '@nestjs/common';
import { Prisma, User as UserModel } from '@prisma/client';
import { UserService } from './user.service';
import { NotFoundException } from '@nestjs/common';
import { BusModule } from 'src/bus/bus.module';
@Controller('user')
export class UserController {
    
  constructor(private readonly userService: UserService) {} 
  @Post('')
  @HttpCode(HttpStatus.CREATED)
   async signupUser(@Body() userData: Prisma.UserCreateInput): Promise<void> {
    await this.userService.createUser(userData);
  }

  @Get('/:id')
  async getUserById(@Param('id') id: string): Promise<UserModel> {
    const user = await this.userService.user({ id: Number(id) });
    if (!user) {
        throw new NotFoundException(`Usuário com ID ${id} não encontrado`);
    }
    return user;
  }

  @Put('/:id')
  async updateUser(@Param('id') id: string, @Body() userData:Prisma.UserUpdateInput
    ):Promise<UserModel>{
    const user= await this.userService.updateUser({ 
      where:{id: Number(id)},
      data:userData  
    })
  if(!user){
    throw new NotFoundException(`Usuário com ID ${id} não encontrado`);
  }
  return user;
  } 

  @Delete('/:id')
  async deleteUser(@Param('id')id:string):Promise<UserModel>{
    return this.userService.deleteUser({id: Number(id)})
  }
    
}


