import { Module } from '@nestjs/common';
import { RoutesService } from './routes.service';
import { RoutesController } from './routes.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  providers: [RoutesService],
  controllers: [RoutesController],
  imports: [DatabaseModule],
  exports:[RoutesModule,RoutesService]
})
export class RoutesModule {}
