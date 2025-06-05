import { Module } from '@nestjs/common';

import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './database/database.module';
import { RoutesModule } from './routes/routes.module';
import { StopesModule } from './stopes/stopes.module';
import { DriverModule } from './driver/driver.module';
import { TravelService } from './travel/travel.service';
import { TravelModule } from './travel/travel.module';
import { RouteStopsModule } from './route-stops/route-stops.module';
import { RouteScheduleModule } from './route-schedule/route-schedule.module';


@Module({
  imports: [AuthModule, UserModule,DatabaseModule, RoutesModule, StopesModule, DriverModule, TravelModule, RouteStopsModule, RouteScheduleModule],
  providers: [TravelService]
})
export class AppModule {}
