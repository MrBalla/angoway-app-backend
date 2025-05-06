export type ResponseBuilder<T = any> = {
  description: string;
  status?: number;
  dto?: new () => T;
};
