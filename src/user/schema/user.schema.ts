// user create schema
import { z } from 'zod';
import { createZodDto } from 'nestjs-zod';

export const LoginUserSchema = z.object({
    number: z.string().nonempty().min(9).default('9xxxxxxxx'),
    password: z.string().nonempty().default('**************'),
});

export class LoginUserBody extends createZodDto(LoginUserSchema){};

export const AccessTokenResponseSchema = z.object({
    access_token: z.string().nonempty(),
});

export const CreateUserSchema = z.object({
  name:z.string(),
  email:z.string().email(),
  number:z.string(),
  password:z.string(),
  disability:z.string().optional(),
  url_foto_de_perfil:z.string().optional(),
  role:z.string().optional(),
});




