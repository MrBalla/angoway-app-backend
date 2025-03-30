import { Inject, Injectable, UnauthorizedException, NotFoundException } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';

import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {

    @Inject()
    private readonly userService: UserService;
    @Inject()
    private readonly jwtService: JwtService;

   async signin(Params: Prisma.UserCreateInput):Promise<{access_token: string}>{
    //verificar se o usuario existe
      const user = await this.userService.user({number: Params.number});
      if(!user)throw new NotFoundException('Usuário não encontrado');
    //verificar se a senha está correta
       const passwordMatch = await bcrypt.compare(Params.password, user.password);
       if(!passwordMatch)throw new UnauthorizedException('credenciais incorreta');
    //retornar o usuario
    const payload = {sub: user.id, number: user.number};

    return {access_token: await this.jwtService.signAsync(payload)};
   }

}