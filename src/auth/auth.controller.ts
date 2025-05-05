import { 
    Controller, 
    Inject, 
    Post, 
    Body, 
    HttpCode, 
    HttpStatus,
    UseGuards
 } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { LoginUserSchema } from '../user/schema/user.schema'

@Controller('auth')
export class AuthController {
    @Inject()
    private readonly authService: AuthService;
    
    @HttpCode(HttpStatus.OK)
    @Post('login')
    signin( @Body() body: Prisma.UserCreateInput){
        return this.authService.signin(body);
    }

    //Estava a pensar em fazer o logout, mas acho que isso é trabalho
    //Do Front, só precisas, remover o Token
    @HttpCode(HttpStatus.OK)
    @UseGuards(AuthGuard)
    @Post('logout')
    logout(){
        return "";
    }
}
