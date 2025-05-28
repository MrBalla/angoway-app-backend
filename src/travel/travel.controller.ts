import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  Query,
} from '@nestjs/common';
import { TravelService } from './travel.service';
import { countMonthly } from '../types/count-monthly.details';
import { weeklyEarnings } from '../types/weekly-earnings.response';
import { OpcionalWeeklyEarningsSchema, OpcionalWeeklyEarningsQuery } from '../common/schemas/opcional-query-weekly-earnings.schema';

@Controller('travel')
export class TravelController {
  constructor(private readonly travelService: TravelService) {}

  // @Post()
  //  create(@Body() createTravelDto: ) {
  //    return this.travelService.create(createTravelDto);
  //  }

  @Get('monthly-count')
  async monthlyCount(): Promise<countMonthly | []> {
    return await this.travelService.monthlyCount();
  }

  @Get('monthly-count/export')
  async monthlyCountExport(@Res() res, @Body('year') year?: number) {
    const monthlyData = await this.travelService.monthlyCount(year);
    const buffer =
      await this.travelService.exportMonthlyTravelsExcel(monthlyData);

    res.set({
      'Content-Type':
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'Content-Disposition': 'attachment; filename="monthly-travels.xlsx"',
    });

    res.send(buffer);
  }
    @Get('weekly-earnings')
    async weeklyEarnings(@Query(new ZodValidationPipe(OpcionalWeeklyEarningsSchema)) query: OpcionalWeeklyEarningsQuery)
        : Promise<weeklyEarnings> {
            const sevenDaysAgo = new Date(new Date() - 6);
            const yesterday = new Date(new Date() - 1);
            yesterday.setHours(23, 59, 59, 999);
            
            let firstDate: Date;
            let lastDate: Date;
            let useDefault = false;

            if (query.startDay) {
                const queryStartDay = new Date(query.startDate);
                queryStartDay.setHours(0, 0, 0, 0);
                useDefault = queryStartDay >= sevenDaysAgo;
                firstDate = (useDefault) ? sevenDaysAgp : queryStartDate;
                lastDate = (userDefault)
                if (queryStartDay >= sevenDaysAgo) {
                    useDefault = true;
                    startDate = sevenDaysAgo;
                    endDate = yesterDay(); 
                } else {
                    startDate
                }
            } else if (query.week) {
      // Semana específica (YYYY-WW)
      const [year, weekNum] = query.week.split('-').map(Number);
      startDate = this.getStartOfWeek(year, weekNum);
      endDate = new Date(startDate.getTime() + 6 * 24 * 60 * 60 * 1000);
      
    } else {
      // Padrão: últimos 7 dias a partir de hoje
      endDate = new Date();
      startDate = new Date(endDate.getTime() - 6 * 24 * 60 * 60 * 1000);
    }
    }

    @Get('weekly-earnings/driver')
    async weeklyEarningsByDriver() {

    }

    @Get('weekly-earnings/route')
    async weeklyEarningsByRoute() {

    }

    @Get('weekly-')


  @Get()
  findAll() {
    return this.travelService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.travelService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.travelService.remove(+id);
  }
}
