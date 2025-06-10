import { Module } from '@nestjs/common';
import { TravelService } from './travel.service';
import { TravelController } from './travel.controller';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  controllers: [TravelController],
  providers: [TravelService, PrismaService],
  exports:[TravelModule, TravelService]
})
export class TravelModule {}
