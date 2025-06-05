import { Module } from '@nestjs/common';
import { RouteScheduleService } from './route-schedule.service';
import { RouteScheduleController } from './route-schedule.controller';
import { DatabaseModule } from 'src/database/database.module';
import { RoutesModule } from 'src/routes/routes.module';

@Module({
  imports:[DatabaseModule,RoutesModule],
  controllers: [RouteScheduleController],
  providers: [RouteScheduleService],
  exports:[RouteScheduleModule,RouteScheduleService]
})
export class RouteScheduleModule {}
