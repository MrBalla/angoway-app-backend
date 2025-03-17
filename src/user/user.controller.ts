import { Controller, Get, Param, Post, Body, Put, Delete,HttpCode, HttpStatus, UseGuards } from '@nestjs/common';
import { Prisma, User as UserModel } from '@prisma/client';
import { UserService } from './user.service';
import { NotFoundException } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
@Controller('user')
export class UserController {
    
  constructor(private readonly userService: UserService) {} 
  @Post('')
  @HttpCode(HttpStatus.CREATED)
   async signupUser(@Body() userData: Prisma.UserCreateInput): Promise<void> {
    await this.userService.createUser(userData);
  }

  @UseGuards(AuthGuard)
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
  @UseGuards(AuthGuard)
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
  @UseGuards(AuthGuard)
  @Delete('/:id')
  async deleteUser(@Param('id')id:string):Promise<void>{
    await this.userService.deleteUser({id: Number(id)})
  }
    
}


