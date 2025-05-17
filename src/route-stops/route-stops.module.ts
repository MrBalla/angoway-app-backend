import { Module } from '@nestjs/common';
import { RouteStopsService } from './route-stops.service';
import { RouteStopsController } from './route-stops.controller';
import { DatabaseModule } from 'src/database/database.module';
import { RoutesModule } from 'src/routes/routes.module';
import { StopesModule } from 'src/stopes/stopes.module';

@Module({
  imports: [DatabaseModule, RoutesModule, StopesModule],
  providers: [RouteStopsService],
  controllers: [RouteStopsController],
  exports: [RouteStopsModule, RouteStopsService],
})
export class RouteStopsModule {}
