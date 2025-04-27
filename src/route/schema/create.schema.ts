// route create schema
import { z } from 'zod';

export const CreateRouteSchema = z.object({
  name:z.string(),
  origin:z.string(),
  destination:z.string(),
  departureTime:z.string(),
  estimatedTime:z.string(),
  arrivalTime:z.string(),
  status:z.string().optional(),
});
