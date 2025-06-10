import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  HttpStatus,
} from '@nestjs/common';
import { NotificationService } from './notification.service';
import { Prisma } from '@prisma/client';
import { AuthGuard } from 'src/auth/auth.guard';
import { ResponseBody } from 'src/types/response.body';
import { Notification } from 'src/types/Notification';

@Controller('notification')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Post()
  create(@Body() createNotificationDto: Prisma.NotificationCreateInput) {
    return this.notificationService.create(createNotificationDto);
  }

  @Get()
  @UseGuards(AuthGuard)
  async findAll(): Promise<Notification[]> {
    return this.notificationService.findAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard)
  async findOne(@Param('id') id: string): Promise<ResponseBody | Notification> {
    const numericId = parseInt(id, 10);
    if (isNaN(numericId)) {
      return {
        code: HttpStatus.BAD_REQUEST,
        message: `ID inválido: ${id}`,
      };
    }
    const found = await this.notificationService.findOne(numericId);

    if (!found) {
      return {
        code: HttpStatus.NOT_FOUND,
        message: 'Notificação não encontrado',
      };
    }

    return found;
  }

  @Patch(':id')
  @UseGuards(AuthGuard)
  async update(
    @Param('id') id: string,
    @Body() data: Prisma.NotificationUpdateInput,
  ): Promise<ResponseBody | any> {
    const numericId = parseInt(id, 10);
    if (isNaN(numericId)) {
      return {
        code: HttpStatus.BAD_REQUEST,
        message: `ID inválido: ${id}`,
      };
    }

    const response = await this.notificationService.update(numericId, data);

    if (response) {
      return {
        code: HttpStatus.OK,
        message: 'Dados Salvos !',
      };
    }

    return {
      code: HttpStatus.INTERNAL_SERVER_ERROR,
      message: 'Não foi atualizar.',
    };
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  async remove(@Param('id') id: string) {
    const numericId = parseInt(id, 10);
    if (isNaN(numericId)) {
      return {
        code: HttpStatus.BAD_REQUEST,
        message: `ID inválido: ${id}`,
      };
    }
    return (
      this.notificationService.remove(numericId),
      {
        code: HttpStatus.OK,
        message: 'Notificação apagada !',
      }
    );
  }
}
