import { z } from 'zod';

export const OpcionalWeeklyEarningsSchema = z.object({
  startDay: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'A Data do inicio da semana especifica de estar neste formato: yyyy-mm-dd').transform((date) => new Date(date + 'T00:00:00.000Z')).optional(),
  week: z.string().regex(/^\d{4}-\d{2}$/, 'A semana especifica deve estar indicada neste formto: yyyy-ww').optional(),
})
//nao pode receber as duas querys opcionais ao mesmo tempo, ou um ou outro
.refine((data) => !(data.startDay && data.week), {
  message: 'Nao pode especificar dia do incio da semana (startDay) e a semana (week) ao mesmo tempo',
});

export type OpcionalWeeklyEarningsQuery = z.infer<typeof OpcionalWeeklyEarningsSchema>;
