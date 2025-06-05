import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
} from '@nestjs/common';
import { RouteScheduleService } from './route-schedule.service';
import { Prisma } from '@prisma/client';
import { ApiNoContentResponse } from '@nestjs/swagger';
import { ResponseBody } from 'src/types/response.body';
import { RouteSchedule } from 'src/types/RouteSchedule';

@Controller('schedules')
export class RouteScheduleController {
  constructor(private readonly routeScheduleService: RouteScheduleService) {}

  @ApiNoContentResponse()
  @Post('')
  async create(@Body() data: Prisma.RouteScheduleCreateInput) {
    return this.routeScheduleService.create(data);
  }

  @Get()
  async findAll() {
    return this.routeScheduleService.findAll();
  }

  @Get(':id')
  async findOne(
    @Param('id') id: string,
  ): Promise<ResponseBody | RouteSchedule> {
    
    const numericId = parseInt(id, 10);
    if (isNaN(numericId)) {
      return {
        code: HttpStatus.BAD_REQUEST,
        message: `ID inválido: ${id}`,
      };
    }

    return this.routeScheduleService.findOne(numericId);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() data: Prisma.RouteScheduleUpdateInput,
  ):Promise<ResponseBody>{
    return this.routeScheduleService.update(+id, data);
  }

  @Delete(':id')
  async remove(@Param('id') id: string):Promise<ResponseBody> {
    return this.routeScheduleService.remove(+id);
  }
}
