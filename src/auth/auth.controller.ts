import { 
    Controller, 
    Inject, 
    Post, 
    Body, 
    HttpCode, 
    HttpStatus,
 } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  @Inject()
  private readonly authService: AuthService;

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signin(@Body() body: Prisma.UserCreateInput) {
    return this.authService.signin(body);
  }

  @HttpCode(HttpStatus.OK)
  @Post('driver/login')
  driverSignin(@Body() body: Prisma.DriverCreateInput) {
    return this.authService.driverSignin(body);
  }
}
