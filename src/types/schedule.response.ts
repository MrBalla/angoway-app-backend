import { Decimal } from "@prisma/client/runtime/library";

export type ScheduleResponse = {
  routeId: number;
  departureLocation: string;
  arrivalLocation: string;
  departureTime: Date;
  arrivalTime: Date;
  estimatedDurationMinutes: number;
  status: string;
  distanceKM: Decimal;
};