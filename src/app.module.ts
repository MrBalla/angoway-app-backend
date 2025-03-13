import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BusModule } from './bus/bus.module';

@Module({
  imports: [AuthModule, UserModule, BusModule]
})
export class AppModule {}
