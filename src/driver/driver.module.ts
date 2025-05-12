import { forwardRef, Module } from '@nestjs/common';
import { DriverController } from './driver.controller';
import { DriverService } from './driver.service';
import { DatabaseModule } from 'src/database/database.module';
import { AuthModule } from 'src/auth/auth.module';
import { DriverLocationGateway } from 'src/gateways/driver-location.gateway';
import { AlertsChannelGateway } from 'src/gateways/alert-channel.gateway';
import { BusModule } from 'src/bus/bus.module';

@Module({
  imports:[DatabaseModule,forwardRef(()=> AuthModule),BusModule],
  controllers: [DriverController],
  providers: [DriverService,DriverLocationGateway,AlertsChannelGateway],
  exports:[DriverService]
})
export class DriverModule {}
