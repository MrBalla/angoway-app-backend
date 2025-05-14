export type busDetails = {
  status: string | undefined;
  capacity: number | undefined;
  currentLoad: number | undefined;
  route: {
    origin: string | undefined;
    destination: string | undefined;
    stops: {}[] | undefined;
  };
};
