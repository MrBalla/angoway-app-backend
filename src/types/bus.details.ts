export type busDetails = {
  status: string | undefined;
  capacity: number | undefined;
  currentLoad: number | undefined;
  numberOfStops: number | undefined;
  route: {
    origin: string | undefined;
    destination: string | undefined;
    estimatedTime: string | undefined;
    stops: {}[] | undefined;
  };
};
