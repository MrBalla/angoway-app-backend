import { Module } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { NotificationController } from './notification.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports:[DatabaseModule],
  controllers: [NotificationController],
  providers: [NotificationService],
  exports:[NotificationModule,NotificationService]
})
export class NotificationModule {}
