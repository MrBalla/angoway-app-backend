import { Module } from '@nestjs/common';

import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './database/database.module';
import { RoutesModule } from './routes/routes.module';


@Module({
  imports: [AuthModule, UserModule,DatabaseModule, RoutesModule]
})
export class AppModule {}
