import { Injectable, Inject } from '@nestjs/common';
import {Prisma, Route} from '@prisma/client';
import {PrismaService} from 'src/database/prisma.service';

@Injectable()
export class RoutesService {

    @Inject()
    private readonly prisma: PrismaService
      
    async create(data: Prisma.RouteCreateInput) {
      return await this.prisma.route.create({
          data,
      });
  }

  async findAll(): Promise<Route[]> {
      return await this.prisma.route.findMany({
          include: {
              stops: true,
              buses: true,
          },
      });
  }

  async findOne(id: number): Promise<Route | null> {
      return await this.prisma.route.findUnique({
          where: { id },
          include: {
              stops: true,
              buses: true,
          },
      });
  }

  async findByOriginOrDestination(query: string): Promise<Route[]> {
      return await this.prisma.route.findMany({
        where: {
          OR: [
            { origin: { contains: query, /*mode: 'insensitive'*/ } },
            { destination: { contains: query, /*mode: 'insensitive' */} },
            // por estar a usar o SQLITE nessa fase não posso usar o mode,
            // mas quando migrar para o postregress ou sei lá resolvo isso
          ],
        },
        include: {
          stops: true,
          buses: true,
        },
      });
    }
  async findByStops(stopName: string): Promise<Route[]> {
    return await this.prisma.route.findMany({
        where: {
          stops: {
            some: {
              name: {
                contains: stopName, /*mode: 'insensitive'*/
              },
            },
          },
        },
        include: {
          stops: true,
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

  async updateRoutes(id: number, data: Prisma.RouteUpdateInput): Promise<Route> {
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
  
  
}
