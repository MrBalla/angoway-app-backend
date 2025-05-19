import { Inject, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class StopesService {
  @Inject()
  private readonly prismaService: PrismaService;

  async findAll() {
    return await this.prismaService.stop.findMany({});
  }

  async findOne(id: number) {
    return await this.prismaService.stop.findUnique({
      where: {
        id: id,
      },
    });
  }
}
