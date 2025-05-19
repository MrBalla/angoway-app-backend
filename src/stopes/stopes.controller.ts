import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { StopesService } from './stopes.service';

@Controller('stops')
export class StopesController {
  constructor(private readonly stopesService: StopesService) {}

  @Get('/all')
  findAll() {
    return this.stopesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.stopesService.findOne(+id);
  }
}
