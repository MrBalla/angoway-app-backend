import { Module } from '@nestjs/common';
import { BusService } from './bus.service';
import { BusController } from './bus.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports:[DatabaseModule],
  providers: [BusService],
  controllers: [BusController],
  exports: [BusModule,BusService],
})
export class BusModule {}
