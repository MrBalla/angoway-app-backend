import { Module } from '@nestjs/common';
import { RouteScheduleService } from './route-schedule.service';
import { RouteScheduleController } from './route-schedule.controller';

@Module({
  controllers: [RouteScheduleController],
  providers: [RouteScheduleService],
})
export class RouteScheduleModule {}
