// notification create schema
import { z } from 'zod';

export const CreateNotificationSchema = z.object({
  userId:z.number(),
  title:z.string(),
  message:z.string(),
  read:z.boolean().optional(),
});
