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
  BadRequestException,
  HttpStatus,
} from '@nestjs/common';
import { setISOWeek, setYear, startOfISOWeek } from 'date-fns';
import { TravelService } from './travel.service';
import { countMonthly } from '../types/count-monthly.details';
import { weeklyEarnings } from '../types/weekly-earnings.response';
import {
  OpcionalWeeklyEarningsSchema,
  OpcionalWeeklyEarningsQuery,
} from '../common/schemas/opcional-query-weekly-earnings.schema';
import { Travel } from '@prisma/client';
import { ResponseBody } from 'src/types/response.body';

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
  async weeklyEarnings(
    @Query() query: OpcionalWeeklyEarningsQuery,
  ): Promise<weeklyEarnings[]> {
    const safeQuery = OpcionalWeeklyEarningsSchema.safeParse(query);

    if (!safeQuery.success) throw new BadRequestException(safeQuery.error);

    const { startDay, week } = safeQuery.data;

    if (startDay) {
      return await this.travelService.weeklyEarnings(new Date(startDay));
    } else if (week) {
      const [year, weekNum] = week.split('-').map(Number);
      const yearDate = setYear(new Date(year, 6, 1), year);
      const weekDate = setISOWeek(yearDate, weekNum);
      return await this.travelService.weeklyEarnings(startOfISOWeek(weekDate));
    }
    return await this.travelService.weeklyEarnings();
  }

  @Get()
  findAll() {
    return this.travelService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ResponseBody | Travel> {
    const numericId = parseInt(id, 10);
    if (isNaN(numericId)) {
      return {
        code: HttpStatus.BAD_REQUEST,
        message: `ID inválido: ${id}`,
      };
    }

    const travel = await this.travelService.findOne(numericId);
    if (!travel) {
      return {
        code: HttpStatus.NOT_FOUND,
        message: 'Registro não encontrado !',
      };
    }

    return travel
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.travelService.remove(+id);
  }
}
