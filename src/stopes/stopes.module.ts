import { Module } from '@nestjs/common';
import { StopesController } from './stopes.controller';
import { StopesService } from './stopes.service';

@Module({
  controllers: [StopesController],
  providers: [StopesService]
})
export class StopesModule {}
