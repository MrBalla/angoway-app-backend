// user create schema
import { z } from 'zod';

export const LoginUserSchema = z.object({
    number: z.string().nonempty(),
    password: z.string().nonempty(),
});

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
