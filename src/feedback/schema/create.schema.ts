// feedback create schema
import { z } from 'zod';

export const CreateFeedbackSchema = z.object({
  userId:z.number(),
  busId:z.number(),
  rating:z.number(),
  comment:z.string(),
});
