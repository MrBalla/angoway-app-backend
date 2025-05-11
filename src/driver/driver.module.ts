import { forwardRef, Module } from '@nestjs/common';
import { DriverController } from './driver.controller';
import { DriverService } from './driver.service';
import { DatabaseModule } from 'src/database/database.module';
import { AuthModule } from 'src/auth/auth.module';
import { UserModule } from 'src/user/user.module';
import { DriverLocationGateway } from 'src/gateways/driver-location.gateway';

@Module({
  imports: [DatabaseModule, forwardRef(() => AuthModule), UserModule],
  controllers: [DriverController],
  providers: [DriverService, DriverLocationGateway,],
  exports:[DriverService]
})
export class DriverModule {}
