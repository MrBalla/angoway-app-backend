import { forwardRef, Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { DatabaseModule } from 'src/database/database.module';
import { AuthService } from 'src/auth/auth.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { AuthModule } from 'src/auth/auth.module';
import { DriverLocationGateway } from 'src/gateways/driver-location.gateway';

@Module({
  imports:[DatabaseModule,forwardRef(()=>AuthModule)],
  controllers: [UserController],
  providers: [UserService,DriverLocationGateway],
  exports:[UserService]
})
export class UserModule {}
