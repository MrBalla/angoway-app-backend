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

  constructor(private readonly jwtService: JwtService) {}

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

    client.broadcast.emit('alertNotificationsUpdate', alert);
  }
}
