import { Module } from '@nestjs/common';
import { BusController } from './bus.controller';

@Module({
  controllers: [BusController]
})
export class BusModule {}
