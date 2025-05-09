import { 
    Controller, 
    Inject, 
    Post, 
    Body, 
    HttpCode, 
    HttpStatus,
    UseGuards
 } from '@nestjs/common';
import { ApiResponse, ApiOkResponse, ApiBody, ApiOperation } from '@nestjs/swagger';
import { BodyValidate } from '../../swagger/validate.decorator';
import { LoginUserSchema } from '../user/schema/user.schema';
import { SPost } from '../../swagger/swagger.decorator'
import { Prisma } from '@prisma/client';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';

@Controller('auth')
export class AuthController {
    @Inject()
    private readonly authService: AuthService;
    
    @HttpCode(HttpStatus.OK)
    @SPost('login', LoginUserSchema)
    signin( @BodyValidate(LoginUserSchema) body: Prisma.UserCreateInput){
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
