// user create schema
import { z } from 'zod';

export const CreateUserSchema = z.object({
  name:z.string(),
  email:z.string().email(),
  number:z.string(),
  password:z.string(),
  disability:z.string().optional(),
  url_foto_de_perfil:z.string().optional(),
  role:z.string().optional(),
});
