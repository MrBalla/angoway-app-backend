// user create schema
import { z } from 'zod';
import { createZodDto } from 'nestjs-zod';
import { extendApi } from '@anatine/zod-openapi';


export const LoginUserSchema = z.object({
    number: z.string().nonempty().min(5),
    password: z.string().nonempty(),
});

export class LoginUserBody extends createZodDto(extendApi(LoginUserSchema)){};

export const AccessTokenResponseSchema = z.object({
    access_token: z.string().nonempty(),
});

export const CreateUserSchema = z.object({
  name:z.string().nonempty(),
  email:z.string().email(),
  number:z.string().min(5),
  password:z.string().nonempty(),
  disability:z.string().optional(),
  url_foto_de_perfil:z.string().optional(),
  role:z.string().optional(),
});




