import { Injectable, Inject } from '@nestjs/common';
import { Prisma, Route } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class RoutesService {
  @Inject()
  private readonly prisma: PrismaService;

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
        status: "active"
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
    return await this.prisma.route.findMany({
      include: {
        schedules: {
          select: {
            departureTime: true,
            arrivalTime:true,
          }
        },
        routeStops: {
          select: {
            stop: {
              select: {
                name:true
              }
            }
          }
        }
      }
    })
  }
}
