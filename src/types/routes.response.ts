export type RouteResponse = {
  id: number;
  origin: string;
  destination: string;
  stops: {
    id: number;
    name: string;
  }[];
};
