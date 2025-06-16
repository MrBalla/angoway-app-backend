export type User = {
  id: number;
  name: string;
  email: string;
  number: string;
  password: string;
  disability?: string | null;
  url_foto_de_perfil?: string | null;
  role?: string;
};
