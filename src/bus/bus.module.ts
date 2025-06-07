import { Module } from '@nestjs/common';
import { BusService } from './bus.service';
import { BusController } from './bus.controller';
import { DatabaseModule } from 'src/database/database.module';
import { RoutesModule } from 'src/routes/routes.module';
import { TravelModule } from 'src/travel/travel.module';

@Module({
  imports:[DatabaseModule,RoutesModule,TravelModule],
  providers: [BusService],
  controllers: [BusController],
  exports: [BusModule,BusService],
})
export class BusModule {}
