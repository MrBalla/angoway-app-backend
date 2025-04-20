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
  import { Inject, Injectable, Logger } from "@nestjs/common";
  import { BusService } from "src/bus/bus.service";
  
  @WebSocketGateway({
    cors: {
      origin: "*",
    },
    transports: ["websocket"],
  })
  @Injectable()
  export class DriverLocationGateway
    implements OnGatewayConnection, OnGatewayDisconnect
  {

    private logger = new Logger("DriverLocationGateway")

    handleConnection(client: Socket) {
      this.logger.log(`Client connected: ${client.id}`);
    }
  
    handleDisconnect(client: Socket) {
      this.logger.log(`Client connected: ${client.id}`);
    }
  
    @SubscribeMessage("driverLocation")
    async handleDriverLocationUpdate(
      @MessageBody() location: DriverLocation,
      @ConnectedSocket() client: Socket,
      @Inject(BusService) busService: BusService
    ) {
      this.logger.log("Location received from", client.id, location);

      const busDetails = await busService.findBusByDriverId(location.driverId);

      if(!busDetails){
        this.logger.warn("No bus where found for driver: ", location.driverId)
        return;
      }

      const busData = {
         busId: busDetails.id,
         driverName: busDetails.driver?.name,
         route: busDetails.route?.name,
         lat: location.lat,
         lng: location.lng,
         status: busDetails.status,
         estimatedTime: busDetails.route?.estimatedTime,
         driverPhoto: busDetails.driver?.url_foto_de_perfil
  };
      
      client.broadcast.emit("driverLocationUpdate", busData);
    }
  }
  