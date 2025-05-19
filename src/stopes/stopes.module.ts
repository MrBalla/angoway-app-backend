import { Module } from '@nestjs/common';
import { StopesController } from './stopes.controller';
import { StopesService } from './stopes.service';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports:[DatabaseModule],
  controllers: [StopesController],
  providers: [StopesService],
  exports:[StopesService, StopesModule]
})
export class StopesModule {}
