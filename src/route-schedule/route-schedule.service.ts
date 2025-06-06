import { Inject, Injectable,HttpStatus } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { ResponseBody } from 'src/types/response.body';
import { RouteSchedule } from 'src/types/RouteSchedule';
import { Prisma } from '@prisma/client';

@Injectable()
export class RouteScheduleService {
  @Inject()
  private readonly prisma: PrismaService;

  async create(body: Prisma.RouteScheduleCreateInput) {
    try {
      return this.prisma.routeSchedule.create({
        data: body,
      });
      
    } catch (error) {
      return {
        code: HttpStatus.INTERNAL_SERVER_ERROR,
        message: 'Horário não Criado. ' + error,
      };
    }
  }

  async findAll(): Promise<RouteSchedule[] | []> {
    return this.prisma.routeSchedule.findMany();
  }

  async findOne(id: number): Promise<ResponseBody | RouteSchedule> {
    if (!id) {
      return {
        code: HttpStatus.BAD_REQUEST,
        message: 'ID não fornecido',
      };
    }

    const response = await this.prisma.routeSchedule.findUnique({
      where: { id },
    });

    if (!response) {
      return {
        code: HttpStatus.NOT_FOUND,
        message: 'Horário não encontrado',
      };
    }

    return response;
  }

  async update(
    id: number,
    data: Prisma.RouteScheduleUpdateInput,
  ): Promise<ResponseBody> {
    const schedule = await this.prisma.routeSchedule.findUnique({
      where: { id },
    });

    if (!schedule) {
      return {
        code: HttpStatus.NOT_FOUND,
        message: 'Horário não encontrado',
      };
    }

    await this.prisma.routeSchedule.update({
      where: { id },
      data: data,
    });

    return {
      code: HttpStatus.OK,
      message: 'Horário atualizado com sucesso !',
    };
  }

  async updateStatus(
    id: number,
    data: Prisma.RouteScheduleUpdateInput,
  ): Promise<ResponseBody> {
    const schedule = await this.prisma.routeSchedule.findUnique({
      where: { id },
    });

    if (!schedule) {
      return {
        code: HttpStatus.NOT_FOUND,
        message: 'Horário não encontrado',
      };
    }

    await this.prisma.routeSchedule.update({
      where: { id },
      data: {
        status: data.status,
      },
    });

    return {
      code: HttpStatus.OK,
      message: 'Horário atualizado com sucesso !',
    };
  }

  async remove(id: number): Promise<ResponseBody> {
    const schedule = await this.prisma.routeSchedule.findUnique({
      where: { id },
    });

    if (!schedule) {
      return {
        code: HttpStatus.NOT_FOUND,
        message: 'Horário não encontrado',
      };
    }

    await this.prisma.routeSchedule.delete({
      where: { id },
    });

    return {
      code: HttpStatus.NO_CONTENT,
      message: 'Horário removido com sucesso !',
    };
  }
}
