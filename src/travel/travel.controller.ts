import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TravelService } from './travel.service';
import { countMonthly } from '../types/count-monthly.details'

@Controller('travel')
export class TravelController {
  constructor(private readonly travelService: TravelService) {}

  @Post()
//  create(@Body() createTravelDto: ) {
//    return this.travelService.create(createTravelDto);
//  }

    @Get('monthly-count')
    async monthlyCount(): Promise<mountMonthly[]>{
        return await this.travelService.monthlyCount();
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
