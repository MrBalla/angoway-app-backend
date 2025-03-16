import { Controller, Inject, Post, Body } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    @Inject()
    private readonly authService: AuthService;
    
    @Post('signin')
     signin( @Body() body: Prisma.UserCreateInput){
        return this.authService.signin(body);
    }
}
