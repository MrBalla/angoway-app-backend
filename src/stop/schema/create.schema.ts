// stop create schema
import { z } from 'zod';

export const CreateStopSchema = z.object({
  name:z.string(),
  routeId:z.number(),
});
