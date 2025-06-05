import { Inject, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { ResponseBody } from 'src/types/response.body';
import { RouteSchedule } from 'src/types/RouteSchedule';
import { Prisma } from '@prisma/client';

@Injectable()
export class RouteScheduleService {
  @Inject()
  private readonly prisma: PrismaService;

  create(data: Prisma.RouteScheduleCreateInput) {
    const response = this.prisma.routeSchedule.create({
      data: data,
    });

    if (!response) {
      return {
        code: 500,
        message: 'Horário não Criado. Tente novamente',
      };
    }

    return {
      code: 201,
      message: 'Horário criado com succeso.',
    };
  }

  async findAll(): Promise<RouteSchedule[] | []> {
    return this.prisma.routeSchedule.findMany();
  }

  async findOne(id: number): Promise<ResponseBody | RouteSchedule> {
    if (!id) {
      return {
        code: 400,
        message: 'ID não fornecido',
      };
    }

    const response = await this.prisma.routeSchedule.findUnique({
      where: { id },
    });

    if (!response) {
      return {
        code: 404,
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
        code: 404,
        message: 'Horário não encontrado',
      };
    }

    await this.prisma.routeSchedule.update({
      where: { id },
      data: data,
    });

    return {
      code: 200,
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
        code: 404,
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
      code: 200,
      message: 'Horário atualizado com sucesso !',
    };
  }

  async remove(id: number): Promise<ResponseBody> {
    const schedule = await this.prisma.routeSchedule.findUnique({
      where: { id },
    });

    if (!schedule) {
      return {
        code: 404,
        message: 'Horário não encontrado',
      };
    }

    await this.prisma.routeSchedule.delete({
      where: { id },
    });

    return {
      code: 201,
      message: 'Horário removido com sucesso !',
    };
  }
}
