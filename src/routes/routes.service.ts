import { Injectable, Inject, HttpStatus } from '@nestjs/common';
import { Prisma, Route, RouteSchedule } from '@prisma/client';
import { addMinutes } from 'date-fns';
import { PrismaService } from 'src/database/prisma.service';
import { ResponseBody } from 'src/types/response.body';

@Injectable()
export class RoutesService {
  @Inject()
  private readonly prisma: PrismaService;

  private readonly DISTANCE_THRESHOLD_KM = 1.5;

  private calculateDistance(
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number,
  ): number {
    const R = 6371; // Raio da Terra em quilômetros
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  }

  async findScheduleByRoute(name: string) {
    return await this.prisma.route.findMany({
      where: {
        name: { contains: name },
      },
      include: {
        schedules: {
          omit: {
            routeId: true,
          },
        },
      },
    });
  }

  async suggestRoutes(
    userLat: number,
    userLng: number,
    currentTime: Date = new Date(),
  ) {
    const allStops = await this.prisma.stop.findMany();
    const nearbyStops = allStops.filter((stop) => {
      if (stop.latitude === null || stop.longitude === null) return false;

      const distance = this.calculateDistance(
        userLat,
        userLng,
        stop.latitude,
        stop.longitude,
      );
      return distance <= this.DISTANCE_THRESHOLD_KM;
    });

    if (nearbyStops.length === 0) return [];

    const stopIds = nearbyStops.map((stop) => stop.id);

    const upcomingRoutes = await this.prisma.route.findMany({
      where: {
        status: 'active',
        schedules: {
          some: {
            departureTime: {
              gte: currentTime,
              lte: addMinutes(currentTime, 30),
            },
          },
        },
        routeStops: {
          some: {
            stopId: {
              in: stopIds,
            },
          },
        },
      },
      include: {
        routeStops: {
          select: {
            order: true,
            stop: {
              select: {
                id: true,
                name: true,
                latitude: true,
                longitude: true,
              },
            },
          },
        },
        buses: true,
      },
    });

    return upcomingRoutes;
  }

  async createRouteWithStops(data: {
    name: string;
    origin: string;
    destination: string;
    stopIdsInOrder: number[];
  }) {
    const { name, origin, destination, stopIdsInOrder } = data;

    const route = await this.prisma.route.create({
      data: { name, origin, destination },
    });

    await this.prisma.routeStop.createMany({
      data: stopIdsInOrder.map((stopId, index) => ({
        routeId: route.id,
        stopId,
        order: index + 1,
      })),
    });
    return route;
  }

  async findByName(name: string) {
    return await this.prisma.route.findMany({
      where: {
        name: {
          contains: name,
          //mode: 'insensitive',
        },
      },
      include: {
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
        buses: true,
      },
    });
  }

  async findAll(): Promise<Route[]> {
    return await this.prisma.route.findMany({
      include: {
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
        buses: true,
      },
    });
  }

  async findOne(id: number): Promise<Route | null> {
    if (!id) {
      throw new Error('ID não fornecido');
    }
    return await this.prisma.route.findUnique({
      where: { id },
      include: {
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
        buses: true,
      },
    });
  }

  async findByOriginOrDestination(query: string): Promise<Route[]> {
    return await this.prisma.route.findMany({
      where: {
        OR: [
          { origin: { contains: query /*mode: 'insensitive'*/ } },
          { destination: { contains: query /*mode: 'insensitive' */ } },
          { name: { contains: query } },
          // por estar a usar o SQLITE nessa fase não posso usar o mode,
          // mas quando migrar para o postregress ou sei lá resolvo isso
        ],
      },
      include: {
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
        buses: true,
      },
    });
  }
  async findByStops(stopName: string): Promise<Route[]> {
    return await this.prisma.route.findMany({
      where: {
        routeStops: {
          some: {
            stop: {
              name: {
                contains: stopName /*mode: 'insensitive'*/,
              },
            },
          },
        },
      },
      include: {
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
        buses: true,
      },
    });
  }

  //para de desativar e ativar a rota

  async toggleStatus(id: number): Promise<Route> {
    const route = await this.findOne(id);

    if (!route) {
      throw new Error('Essa Routa não existe');
    }
    const newStatus = route.status === 'active' ? 'inactive' : 'active';

    return this.prisma.route.update({
      where: { id },
      data: { status: newStatus },
    });
  }

  async updateRoutes(
    id: number,
    data: Prisma.RouteUpdateInput,
  ): Promise<Route> {
    return await this.prisma.route.update({
      where: { id },
      data,
    });
  }

  async deleteRoutes(id: number): Promise<Route> {
    return await this.prisma.route.delete({
      where: { id },
    });
  }

  async countRoutes(): Promise<{ count: number }> {
    const count = await this.prisma.route.count();
    return { count };
  }

  async countActiveRoutes(): Promise<{ count: number }> {
    const count = await this.prisma.route.count({
      where: {
        status: 'active',
      },
    });
    return { count };
  }

  async countInactiveRoutes(): Promise<{ count: number }> {
    const count = await this.prisma.route.count({
      where: {
        status: 'inactive',
      },
    });
    return { count };
  }

  async getDetailedRoutes() {
    return await this.prisma.route
      .findMany({
        include: {
          schedules: {
            select: {
              id: true,
              departureTime: true,
              arrivalTime: true,
            },
          },
          routeStops: {
            select: {
              stop: {
                select: {
                  name: true,
                },
              },
            },
          },
        },
      })
      .then((routes) =>
        routes.map((route) => ({
          ...route,
          origin: {
            lat: route.originLatitude,
            lng: route.originLongitude,
          },
          destination: {
            lat: route.destinationLatitude,
            lng: route.destinationLongitude,
          },
        })),
      );
  }

  async assignSchedule(
    scheduleId: number,
    routeId: number,
  ) {


    const route = await this.prisma.route.findUnique({
      where: {
        id: routeId,
      },
    });

    if (!route) {
      return {
        code: HttpStatus.NOT_FOUND,
        message: 'Rota não encontrada',
      };
    }

    const schedule = await this.prisma.routeSchedule.findUnique({
      where: { id: scheduleId },
    });

    if (!schedule) {
      return {
        code: HttpStatus.NOT_FOUND,
        message: 'Horário não encontrado',
      };
    }

    // Update the schedule to connect it to the route without removing it from others
    await this.prisma.routeSchedule.update({
      where: { id: scheduleId },
      data: {
        routeId: routeId,
      },
    });

    return this.prisma.route.findUnique({
      where: { id: routeId },
      include: {
        schedules: true,
      },
    });
  }
}
