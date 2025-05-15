import {
  WebSocketGateway,
  SubscribeMessage,
  OnGatewayConnection,
  OnGatewayDisconnect,
  MessageBody,
  ConnectedSocket,
} from '@nestjs/websockets';
import { Socket } from 'socket.io';
import { DriverLocation } from 'src/types/driver.location';
import { Injectable, Logger } from '@nestjs/common';
import { BusService } from 'src/bus/bus.service';
import { JwtService } from '@nestjs/jwt';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
  transports: ['websocket'],
})
@Injectable()
export class DriverLocationGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  private logger = new Logger('DriverLocationGateway');

  constructor(
    private readonly jwtService: JwtService,
    private readonly busService: BusService,
  ) {}

  async handleConnection(client: Socket) {
    try {
      const token = client.handshake.auth.token;
      const decoded = await this.jwtService.verifyAsync(token);
        
      (client as any).driverId = decoded.sub;

      this.logger.log(
        `Client connected: ${client.id}, driverId: ${decoded.sub}`,
      );
    } catch (err) {
      this.logger.error('Unauthorized socket connection');
      client.disconnect();
    }
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`Client disconnected: ${client.id}`);
  }

  @SubscribeMessage('driverLocation')
  async handleDriverLocationUpdate(
    @MessageBody() location: DriverLocation,
    @ConnectedSocket() client: Socket,
  ) {
    const driverId = (client as any).driverId;

    if (!driverId) {
      this.logger.warn('No driverId found on client');
      return;
    }

    const busDetails = await this.busService.findBusAndDetailsByDriverId(driverId);
    if (!busDetails) {
      this.logger.warn(`No bus found for driverId: ${driverId}`);
      return;
    }

    const busData = {
      busId: busDetails.id,
      driverName: busDetails.driver?.name,
      route: busDetails.route?.name,
      lat: location.lat,
      lng: location.lng,
      status: busDetails.status,
      driverPhoto: busDetails.driver?.url_foto_de_perfil,
    };

    client.broadcast.emit('driverLocationUpdate', busData);
  }
}
