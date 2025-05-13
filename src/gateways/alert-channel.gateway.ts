import {
  WebSocketGateway,
  SubscribeMessage,
  OnGatewayConnection,
  OnGatewayDisconnect,
  MessageBody,
  ConnectedSocket,
} from '@nestjs/websockets';
import { Socket } from 'socket.io';
import { AlertNotification } from 'src/types/alert.notification';
import { Injectable, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { DriverService } from 'src/driver/driver.service';
import { BusService } from 'src/bus/bus.service';
import { RoutesService } from 'src/routes/routes.service';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
  transports: ['websocket'],
})
@Injectable()
export class AlertsChannelGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  private logger = new Logger('AlertsChannelGateway');

  constructor(
    private readonly jwtService: JwtService,
    private readonly driverService: DriverService,
    private readonly busService: BusService,
    private readonly routesService:RoutesService,
  ) {}

  async handleConnection(client: Socket) {
    try {
      const token = client.handshake.auth.token;
      const decoded = await this.jwtService.verifyAsync(token);

      (client as any).userId = decoded.sub;

      this.logger.log(`Client connected: ${client.id}, userId: ${decoded.sub}`);
    } catch (err) {
      this.logger.error('Unauthorized socket connection');
      client.disconnect();
    }
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`Client disconnected: ${client.id}`);
  }

  @SubscribeMessage('alertNotification')
  async handleAlertsNotifications(
    @MessageBody() alert: AlertNotification,
    @ConnectedSocket() client: Socket,
  ) {
    const userId = (client as any).userId;

    if (!userId) {
      this.logger.warn('No userId found on client');
      return;
    }

    const driver = await this.driverService.driver({ id: alert.driverId });

    if (!driver) {
      this.logger.warn('No Driver found !');
      return;
    }

    const driverBus = await this.busService.findBusByDriverId(driver.id);

    if (!driverBus) {
      this.logger.warn(`No Bus was found for ${driver.name}!`);
      return;
    }

    const busRoute = await this.routesService.findOne(driverBus.routeId)

    if (!busRoute) {
      this.logger.warn(`No Route was found for Bus ${driverBus.nia}!`);
      return;
    }

    const adminAlert = {
      driverName: driver.name,
      type: alert.type,
      driverId: alert.driverId,
      message: alert.message,
      loc: alert.loc,
      timestamp: alert.timestamp, //convert this
      busNIA: driverBus.nia,
      route: busRoute.name
    };

    client.broadcast.emit('alertNotificationsUpdate', adminAlert);
  }
}
