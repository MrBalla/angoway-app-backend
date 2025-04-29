// bus create schema
import { z } from 'zod';

export const CreateBusSchema = z.object({
  matricula:z.string(),
  driverId:z.number(),
  routeId:z.number(),
  status:z.string().optional(),
  capacity:z.number(),
  currentLoad:z.number(),
  location:z.string(),
});
