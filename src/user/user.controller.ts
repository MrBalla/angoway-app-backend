import { Controller, Get, Param, Post, Body, Put, Delete,HttpCode, HttpStatus } from '@nestjs/common';
import { Prisma, User as UserModel } from '@prisma/client';
import { UserService } from './user.service';
@Controller('user')
export class UserController {
    
  constructor(private readonly userService: UserService) {} 
  @Post('signup')
  @HttpCode(HttpStatus.CREATED)
   async signupUser(@Body() userData: Prisma.UserCreateInput): Promise<void> {
    await this.userService.createUser(userData);
  }
}
