import {
    WebSocketGateway,
    SubscribeMessage,
    OnGatewayConnection,
    OnGatewayDisconnect,
    MessageBody,
    ConnectedSocket
  } from "@nestjs/websockets";
  import { Socket, Server } from "socket.io";
  import { DriverLocation } from "src/types/driver.location";
  
  @WebSocketGateway({
    cors: {
      origin: "*",
    },
    transports: ["websocket"],
  })
  export class DriverLocationGateway
    implements OnGatewayConnection, OnGatewayDisconnect
  {
    handleConnection(client: Socket) {
      console.log("Client connected:", client.id);
    }
  
    handleDisconnect(client: Socket) {
      console.log("Client disconnected:", client.id);
    }
  
    @SubscribeMessage("driverLocation")
    handleDriverLocationUpdate(
      @MessageBody() location: DriverLocation,
      @ConnectedSocket() client: Socket
    ) {
      console.log("Location received from", client.id, location);
      
      client.broadcast.emit("driverLocationUpdate", location);
    }
  }
  