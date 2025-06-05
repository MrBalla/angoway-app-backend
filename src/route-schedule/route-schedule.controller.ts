import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
  UseGuards,
  HttpCode,
} from '@nestjs/common';
import { RouteScheduleService } from './route-schedule.service';
import { Prisma } from '@prisma/client';
import { ResponseBody } from 'src/types/response.body';
import { RouteSchedule } from 'src/types/RouteSchedule';
import { AuthGuard } from 'src/auth/auth.guard';
import { ScheduleResponse } from 'src/types/schedule.response';

@Controller('schedules')
export class RouteScheduleController {
  constructor(private readonly routeScheduleService: RouteScheduleService) {}

  @Post('')
  @UseGuards(AuthGuard)
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() data: Prisma.RouteScheduleCreateInput) {
    return this.routeScheduleService.create(data);
  }

  @Get()
  @UseGuards(AuthGuard)
  @HttpCode(HttpStatus.OK)
  async findAll():Promise<ScheduleResponse[] | []> {
    return this.routeScheduleService.findAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard)
  @HttpCode(HttpStatus.OK)
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
  @UseGuards(AuthGuard)
  @HttpCode(HttpStatus.OK)
  async update(
    @Param('id') id: string,
    @Body() data: Prisma.RouteScheduleUpdateInput,
  ): Promise<ResponseBody> {
    return this.routeScheduleService.update(+id, data);
  }

  @Patch('status/:id')
  @UseGuards(AuthGuard)
  @HttpCode(HttpStatus.OK)
  async updateStatus(
    @Param('id') id: string,
    @Body() data: Prisma.RouteScheduleUpdateInput,
  ): Promise<ResponseBody> {
    return this.routeScheduleService.updateStatus(+id, data)
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @UseGuards(AuthGuard)
  async remove(@Param('id') id: string): Promise<ResponseBody> {
    return this.routeScheduleService.remove(+id);
  }
}
