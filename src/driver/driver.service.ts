import {
  BadRequestException,
  HttpStatus,
  Inject,
  Injectable,
} from '@nestjs/common';
import { Prisma, Driver } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';
import * as bcrypt from 'bcrypt';
import { AssignedBusDriverResponse } from '../types/drivers-with-assigned-buses.response';
import { ResponseBody } from 'src/types/response.body';
@Injectable()
export class DriverService {
  @Inject()
  private readonly prisma: PrismaService;

  async allDrivers(): Promise<(Driver & { busNia: string })[]> {
    const drivers = await this.prisma.driver.findMany({
      include: {
        assignedBus: {
          select: { nia: true },
        },
      },
    });

    return drivers.map((driver) => ({
      ...driver,
      busNia: driver.assignedBus?.nia ?? 'N/A',
    }));
  }

  async allRecentDrivers(): Promise<(Driver & { busNia: string })[]> {
    const now = new Date();
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const startOfNextMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1);

    const drivers = await this.prisma.driver.findMany({
      where: {
        createdAt: {
          gte: startOfMonth,
          lt: startOfNextMonth,
        },
      },
      include: {
        assignedBus: {
          select: { nia: true },
        },
      },
    });

    return drivers.map((driver) => ({
      ...driver,
      busNia: driver.assignedBus?.nia ?? 'N/A',
    }));
  }

  async assignedBusDriver(): Promise<AssignedBusDriverResponse[]> {
    const drivers = await this.prisma.driver.findMany({
      where: {
        assignedBus: {
          isNot: null,
        },
      },
      include: {
        assignedBus: {
          select: {
            nia: true,
            route: true,
          },
        },
      },
    });

    return drivers.map((driver) => ({
      id: driver.id,
      name: driver.name,
      route: driver.assignedBus?.route ?? {},
      NIA: driver.assignedBus?.nia ?? 'N/A',
    }));
  }

  async createDriver(data: Prisma.DriverCreateInput) {
    const isEmailUsed = await this.driver({ email: data.email });
    if (isEmailUsed) throw new BadRequestException('email já cadastrado');

    const isNumberUsed = await this.driver({ phone: data.phone });
    if (isNumberUsed) throw new BadRequestException('numero já cadastrado');

    const isLicenseUsed = await this.driver({
      licenseNumber: data.licenseNumber,
    });
    if (isLicenseUsed) throw new BadRequestException('Licença já cadastrada');

    const hashPasssword = await bcrypt.hash(data.password, 10);
    return this.prisma.driver.create({
      data: { ...data, password: hashPasssword },
    });
  }

  //busca o motorista pelo id
  async driver(
    driverWhereUniqueInput: Prisma.DriverWhereUniqueInput,
  ): Promise<Driver | null> {
    return this.prisma.driver.findUnique({
      where: driverWhereUniqueInput,
    });
  }

  async getDriverDetails(id: number): Promise<ResponseBody | any> {
    const driver = await this.prisma.driver.findUnique({
      where: { id: id },
      select: {
        isVerified: true,
        name: true,
        lastLogin: true,
        rating: true,
        url_foto_de_perfil: true,
        assignedBus: {
          select: {
            nia: true,
            matricula: true,
            travels: {
              select: {
                profit: true,
              },
            },
            route: {
              select: {
                schedules: {
                  select: {
                    departureTime: true,
                    arrivalTime:true
                  }
                }
              }
            }
          },
        },
      },
    });

    if (!driver) {
      return {
        code: HttpStatus.NOT_FOUND,
        message: 'Não encontramos este Motorista !',
      };
    }

    return driver;
  }

  async getDriversAvailable(): Promise<Driver[]> {
    return this.prisma.driver.findMany({
      where: {
        status: 'AVAILABLE',
      },
    });
  }

  async getDriversOnRoute(): Promise<Driver[]> {
    return this.prisma.driver.findMany({
      where: {
        status: 'ON_ROUTE',
      },
    });
  }

  async countActiveDrivers(): Promise<{ count: number }> {
    const count = await this.prisma.driver.count({
      where: {
        status: {
          in: ['AVAILABLE', 'ON_ROUTE', 'IN_TRANSIT'],
        },
        assignedBus: {
          isNot: null,
        },
      },
    });
    return { count };
  }

  async countInactiveDrivers(): Promise<{ count: number }> {
    const count = await this.prisma.driver.count({
      where: {
        status: 'OFFLINE',
      },
    });
    return { count };
  }

  async countPendingDrivers(): Promise<{ count: number; drivers: Driver[] }> {
    const pendingDrivers = await this.prisma.driver.findMany({
      where: {
        assignedBus: null,
      },
    });

    const pendingDriversCount = pendingDrivers.length;

    return { count: pendingDriversCount, drivers: pendingDrivers };
  }

  async countDrivers(): Promise<{ count: number }> {
    const count = await this.prisma.driver.count();
    return { count };
  }

  async countEffectivatedDrivers(): Promise<{ count: number }> {
    const effectives = await this.prisma.driver.findMany({
      where: {
        effectiveDate: {
          not: null,
        },
      },
    });

    const effectivatedDrivers = effectives.length;

    return { count: effectivatedDrivers };
  }

  async countRecentDrivers(): Promise<{ count: number }> {
    const now = new Date();
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const startOfNextMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1);

    const drivers = await this.prisma.driver.findMany({
      where: {
        createdAt: {
          gte: startOfMonth,
          lt: startOfNextMonth,
        },
      },
    });

    const recentDrivers = drivers.length;

    return { count: recentDrivers };
  }

  async updateDriver(params: {
    where: Prisma.DriverWhereUniqueInput;
    data: Prisma.DriverUpdateInput;
  }): Promise<Driver> {
    const { where, data } = params;
    return this.prisma.driver.update({
      data,
      where,
    });
  }

  async updatePassword(params: {
    where: Prisma.DriverWhereUniqueInput;
    data: Prisma.DriverUpdateInput;
  }): Promise<Driver> {
    const { where, data } = params;
    if (typeof data.password !== 'string') {
      throw new BadRequestException('A senha deve ser uma string');
    }
    const hashPasssword = await bcrypt.hash(data.password, 10);
    return this.prisma.driver.update({
      data: { ...data, password: hashPasssword },
      where,
    });
  }

  /*async updateDriverLocation(params: {
        where: Prisma.DriverWhereUniqueInput;
        data: Prisma.DriverUpdateInput;
    }): Promise<Driver> {
        const { where, data } = params;
        return this.prisma.driver.update({
            data,
            where,
        });
    }*/
  async deleteDriver(where: Prisma.DriverWhereUniqueInput): Promise<Driver> {
    return this.prisma.driver.delete({
      where,
    });
  }

  async updateStatus(
    id: number,
    status: 'AVAILABLE' | 'ON_ROUTE' | 'OFFLINE',
  ): Promise<Driver | null> {
    //Verificar se o Status é valido
    const validStatuses = ['AVAILABLE', 'ON_ROUTE', 'OFFLINE'];
    if (!validStatuses.includes(status)) {
      throw new BadRequestException('Status inválido');
    }

    return this.prisma.driver.update({
      where: { id },
      data: { status },
    });
  }

  async effectDriver(id: number): Promise<Driver | null> {
    return this.prisma.driver.update({
      where: { id },
      data: { effectiveDate: new Date() },
    });
  }

  async verifyDriver(where: Prisma.DriverWhereUniqueInput): Promise<Driver> {
    const driver = await this.driver(where);
    if (!driver) {
      throw new BadRequestException('Motorista não encontrado');
    }
    const verify = driver.isVerified === true ? false : true;

    return await this.prisma.driver.update({
      where: { id: driver.id },
      data: { isVerified: verify },
    });
  }
  //atribuir o autocarro ao motorista
  async assignBus(
    driverId: number,
    busNia: string,
  ): Promise<ResponseBody | Driver> {
    const driver = await this.driver({ id: driverId });
    if (!driver) {
      return {
        code: HttpStatus.NOT_FOUND,
        message: 'Motorista não encontrado',
      };
    }

    const bus = await this.prisma.bus.findUnique({
      where: { nia: busNia },
    });
    if (!bus) {
      return {
        code: HttpStatus.NOT_FOUND,
        message: 'Autocarro não encontrado',
      };
    }

    if (bus.driverId && bus.driverId !== driver.id) {
      return {
        code: HttpStatus.BAD_REQUEST,
        message: 'Autocarro já atribuído a outro motorista',
      };
    }

    await this.prisma.bus.update({
      where: {
        nia: busNia,
      },
      data: {
        driverId: driver.id,
      },
    });

    return this.prisma.driver.update({
      where: {
        id: driverId,
      },
      data: {
        status: 'ON_ROUTE',
        effectiveDate: new Date(),
      },
      include: {
        assignedBus: true,
      },
    });
  }
  //remover a atribuição do autocarro ao motorista
  async unassignBus(driverId: number): Promise<ResponseBody | Driver> {
    //Verificar se o motorista existe
    const driver = await this.driver({ id: driverId });
    if (!driver) {
      return {
        code: HttpStatus.BAD_REQUEST,
        message: 'Motorista não encontrado',
      };
    }
    //Verificar se o motorista está atribuído a um autocarro
    const bus = await this.prisma.bus.findUnique({
      where: {
        driverId: driverId,
      },
    });
    if (!bus) {
      return {
        code: HttpStatus.BAD_REQUEST,
        message: 'Motorista não está atribuído a um autocarro',
      };
    }
    //Remover a atribuição do autocarro e deixar o status como disponível
    await this.prisma.bus.update({
      where: {
        driverId: driverId,
      },
      data: {
        driverId: null,
      },
    });

    return this.prisma.driver.update({
      where: {
        id: driverId,
      },
      data: {
        status: 'AVAILABLE',
      },
    });
  }

  async updateLocation(id: number, lat: number, long: number): Promise<Driver> {
    return this.prisma.driver.update({
      where: { id },
      data: {
        currentLatitude: lat,
        currentLongitude: long,
      },
    });
  }

  //for mocking
  async getLocation(
    id: number,
  ): Promise<ResponseBody | { latitude: number; longitude: number }> {
    const driver = await this.prisma.driver.findUnique({ where: { id: id } });
    if (!driver) {
      return {
        code: HttpStatus.BAD_REQUEST,
        message: 'Motorista não encontrado',
      };
    }

    return {
      latitude: driver.currentLatitude || 0,
      longitude: driver.currentLongitude || 0,
    };
  }
}
