import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
} from '@nestjs/common';
import { TravelService } from './travel.service';
import { countMonthly } from '../types/count-monthly.details';

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
