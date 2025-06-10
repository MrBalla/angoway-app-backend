import { Inject, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';
import { Notification } from 'src/types/Notification';

@Injectable()
export class NotificationService {
  @Inject()
  private readonly prisma: PrismaService;
  async create(data: Prisma.NotificationCreateInput) {
    return await this.prisma.notification.create({
      data: data,
    });
  }

  async findAll(): Promise<Notification[]> {
    return await this.prisma.notification.findMany();
  }

  async findOne(id: number):Promise<Notification | null> {
    const notification = await this.prisma.notification.findUnique({
      where: { id },
    });

  return notification
  }

  async update(
    id: number,
    data: Prisma.NotificationUpdateInput,
  ) {
    return await this.prisma.notification.update({
      where: { id },
      data: data
    });
  }

  async remove(id: number) {
    return await this.prisma.notification.delete({
      where:{id}
    });
  }
}
