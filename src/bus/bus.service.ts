import {
  Injectable,
  Inject,
  NotFoundException,
  BadRequestException,
  HttpStatus,
} from '@nestjs/common';
import { Prisma, Bus } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';
import { RoutesService } from 'src/routes/routes.service';
import { TravelService } from 'src/travel/travel.service';
import { ResponseBody } from 'src/types/response.body';
import { updateBusDetails } from 'src/types/update-bus-details';

@Injectable()
export class BusService {
  @Inject()
  private readonly prisma: PrismaService;
  private readonly BUS_RIDE_PRICE = 150;

  constructor(
    private readonly routesService: RoutesService,
    private readonly travelService: TravelService,
  ) {}

  async generateNIA(): Promise<string> {
    const lastBus = await this.prisma.bus.findFirst({
      orderBy: { updatedAt: 'desc' },
      select: { nia: true },
    });
    let number = 1;
    if (lastBus?.nia) {
      const match = lastBus.nia.match(/BUS-(\d+)/);
      if (match) number = parseInt(match[1]) + 1;
    }
    return `BUS-${String(number).padStart(4, '0')}`;
  }
  //Criando o Bus
  async createBus(data: Prisma.BusCreateInput) {
    const nia = await this.generateNIA();

    return this.prisma.bus.create({
      data: {
        ...data,
        nia,
      },
    });
  }

  //Mostrar os Buses
  async buses(): Promise<Bus[]> {
    const buses = await this.prisma.bus.findMany({
      include: {
        driver: {
          select: { name: true },
        },
        route: {
          select: { name: true },
        },
      },
    });
    return buses.map((bus) => {
      const { route, driver, ...simplifiedBus } = bus;
      return {
        ...simplifiedBus,
        driverName: driver?.name || 'N/A',
        route: route?.name || 'N/A',
      };
    });
  }

  async busesWithRoute(): Promise<Bus[]> {
    return await this.prisma.bus.findMany({
      where: {
        routeId: { not: undefined },
      },
      include: {
        route: {
          select: {
            name: true,
          },
        },
      },
    });
  }

  async countBuses(): Promise<{ count: number }> {
    const count = await this.prisma.bus.count();
    return { count };
  }

  async pendingBuses(): Promise<{ count: number; buses: Bus[] }> {
    const pendingBuses = await this.prisma.bus.findMany({
      where: {
        driverId: null,
      },
    });
    const countPending = pendingBuses.length;
    return {
      count: countPending,
      buses: pendingBuses,
    };
  }

  async countAvailableBuses(): Promise<{ count: number; buses: Bus[] }> {
    const availableBuses = await this.prisma.bus.findMany({
      where: {
        driver: {
          status: {
            in: ['AVAILABLE', 'IN_TRANSIT'],
          },
        },
        AND: {
          status: {
            in: ['IN_TRANSIT'],
          },
        },
      },
    });
    return {
      count: availableBuses.length,
      buses: availableBuses,
    };
  }

  async countInactiveBuses(): Promise<{ count: number; buses: Bus[] }> {
    const inactiveBuses = await this.prisma.bus.findMany({
      where: {
        OR: [
          {
            driver: {
              status: 'OFFLINE',
            },
          },
          {
            status: {
              in: ['ACCIDENT', 'BREAKDOWN'],
            },
          },
        ],
      },
    });

    return {
      count: inactiveBuses.length,
      buses: inactiveBuses,
    };
  }

  async findBusById(id: number): Promise<Bus | null> {
    return this.prisma.bus.findUnique({
      where: {
        id,
      },
    });
  }

  async findBusByDriverId(driverId: number): Promise<Bus | null> {
    return this.prisma.bus.findFirst({
      where: { driverId },
    });
  }

  async findBusAndDetailsByDriverId(driverId: number) {
    return this.prisma.bus.findFirst({
      where: { driverId },
      include: {
        driver: {
          select: {
            name: true,
            url_foto_de_perfil: true,
            experienceTime: true,
          },
        },
        route: {
          select: {
            name: true,
            routeStops: {
              select: {
                stop: {
                  select: {
                    id: true,
                    name: true,
                  },
                },
              },
            },
          },
        },
      },
    });
  }

  async updateBus(id: number, data: Prisma.BusUpdateInput): Promise<Bus> {
    return this.prisma.bus.update({ where: { id }, data });
  }
  async deleteBus(id: number): Promise<Bus> {
    return this.prisma.bus.delete({ where: { id } });
  }

  async provideBusDetails(driverId: number) {
    return await this.prisma.bus.findFirst({
      where: { driverId },
      include: {
        route: {
          include: {
            routeStops: {
              include: {
                stop: true,
              },
              orderBy: { order: 'asc' },
            },
          },
        },
      },
    });
  }

  // driver app (manage screen)
  async updateBusDetails(id: number, data: updateBusDetails) {
    let updatedInfo: string = "";
    if (data.status !== undefined && data.status !== null) {
      const bus = await this.prisma.bus.findUnique({
        where: { id },
      });
      if (!bus) {
        return {
          code: HttpStatus.NOT_FOUND,
          message: 'Ônibus não encontrado',
        };
      }
      if (bus.status !== 'IN_TRANSIT' && data.status === 'IN_TRANSIT') {
        console.log("Bus is not in transit, creating travel");
        this.travelService.create(id);
      } else if (bus.status === 'IN_TRANSIT' && (data.status === 'OFFLINE' || data.status === 'ACCIDENT')) {
        console.log("Bus is in transit, closing travel");
        console.log(await this.travelService.close(id));
      }
    }
    if (data.currentLoad !== null || data.currentLoad !== undefined) {
      const travel = await this.travelService.findOneByBusId(id);
      if (!travel) {
        return {
          code: HttpStatus.NOT_FOUND,
          message: 'Registro da viagem não encontrado',
        };
      }
      const currentProfit = Number(travel.profit)
      const loadTimesPrice = Number(data.currentLoad) * this.BUS_RIDE_PRICE

      this.prisma.travel.update({
        where: { id },
        data: {
          profit: currentProfit + loadTimesPrice,
        },
      });
    }
    return this.prisma.bus.update({ where: { id }, data });
  }

  async changeRoute(driverId: number, newRouteId: number):Promise<Bus | ResponseBody> {
    const bus = await this.prisma.bus.findFirst({ where: { driverId } });

    if (!bus) {
      return {
        code:HttpStatus.NOT_FOUND,
        message: "Este autocarro nao existe."
      }
    }

    if (!newRouteId) {
      return {
        code: HttpStatus.BAD_REQUEST,
        message: "Voce precisa informar a rota."
      }
    }

    const newRoute = await this.routesService.findOne(newRouteId);

    if (!newRoute) {
      return {
        code:HttpStatus.NOT_FOUND,
        message:"Esta rota nao existe!."
      }
    }

    return this.prisma.bus.update({
      where: { id: bus.id },
      data: { routeId: newRouteId },
    });
  }

  async changeStatus(
    driverId: number,
    data: Prisma.BusUpdateInput,
  ): Promise<ResponseBody | Bus> {
    const bus = await this.prisma.bus.findFirst({ where: { driverId } });

    if (!bus) {
      return {
        code: HttpStatus.NOT_FOUND,
        message: 'Autocarro não encontrado',
      };
    }

    if (!data.status) {
      return {
        code: HttpStatus.BAD_REQUEST,
        message: 'Informe o novo status',
      };
    }

    const currentStatus = bus.status === data.status ? bus.status : data.status;

    return this.prisma.bus.update({
      where: { id: bus.id },
      data: { status: currentStatus },
    });
  }

  async assignDriver(
    busId: number,
    driverEmail: string,
  ): Promise<ResponseBody | Bus> {
    const driver = await this.prisma.driver.findUnique({
      where: {
        email: driverEmail,
      },
    });

    if (!driver) {
      return {
        code: HttpStatus.NOT_FOUND,
        message: 'Motorista não encontrado',
      };
    }

    const bus = await this.prisma.bus.findUnique({
      where: { id: busId },
    });

    if (!bus) {
      return {
        code: HttpStatus.NOT_FOUND,
        message: 'Autocarro não encontrado',
      };
    }

    return this.prisma.bus.update({
      where: { id: busId },
      data: {
        driverId: driver.id,
        status: 'IN_TRANSIT',
      },
    });
  }
}
