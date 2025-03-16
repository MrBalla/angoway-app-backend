import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { NotFoundError } from 'rxjs';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
@Injectable()
export class AuthService {

    @Inject()
    private readonly userService: UserService;

   async signin(Params: Prisma.UserCreateInput):Promise<Omit<User, "password">>{
    //verificar se o usuario existe
      const user = await this.userService.user({email: Params.email});
      if(!user)throw new NotFoundError('Usuário não encontrado');
    //verificar se a senha está correta
       const passwordMatch = await bcrypt.compare(Params.password, user.password);
       if(!passwordMatch)throw new UnauthorizedException('credenciais incorreta');
    //retornar o usuario
    const {password,...result} = user;

    return result;
   }
}
