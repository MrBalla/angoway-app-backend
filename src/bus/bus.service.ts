import {
  Injectable,
  Inject,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { Prisma, Bus } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';
import { updateBusDetails } from 'src/types/update-bus-details';

@Injectable()
export class BusService {
  @Inject()
  private readonly prisma: PrismaService;

  //Crud Basico
  //Criando o Bus
  async createBus(data: Prisma.BusCreateInput) {
    return this.prisma.bus.create({ data });
  }

  //Mostrar os Buses
  async buses(): Promise<Bus[]> {
    return this.prisma.bus.findMany();
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
          },
        },
        route: {
          select: {
            name: true,
            estimatedTime: true,
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
    return this.prisma.bus.findFirst({
      where: { driverId },
      include: {
        route: {
          select: {
            origin: true,
            destination: true,
            estimatedTime: true,
            stops: {
              select: {
                name: true,
              },
            },
          },
        },
      },
    });
  }

  // driver app (manage screen)
  async updateBusDetails(id: number, data: updateBusDetails) {
    return this.prisma.bus.update({ where: { id }, data });
  }

  async changeStatus(
    driverId: number,
    data: Prisma.BusUpdateInput,
  ): Promise<Bus> {
    const bus = await this.prisma.bus.findFirst({ where: { driverId } });

    if (!bus) {
      throw new NotFoundException('Este autocarro não existe');
    }

    if (!data.status) throw new BadRequestException('Informe o novo status');

    const currentStatus = bus.status === data.status ? bus.status : data.status;

    // if(!currentStatus) throw new BadRequestException("isso")

    return this.prisma.bus.update({
      where: { id: bus.id },
      data: { status: currentStatus },
    });
  }
}
