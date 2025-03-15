import { Module } from '@nestjs/common';

import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BusModule } from './bus/bus.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [AuthModule, UserModule, BusModule, DatabaseModule]
})
export class AppModule {}
