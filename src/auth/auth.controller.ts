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
import { LoginUserDto, AccessTokenDto } from './auth.dto'
import { Prisma } from '@prisma/client';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';

@Controller('auth')
export class AuthController {
    @Inject()
    private readonly authService: AuthService;
    
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: 'login user' })
    @ApiBody({ type: LoginUserDto })
    @ApiResponse({
        status: 201,
        description: 'user logged in successfully',
        type: AccessTokenDto,
    })
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
