import { Injectable, Inject } from '@nestjs/common';

import {PrismaService} from 'src/database/prisma.service';
@Injectable()
export class RoutesService {

    @Inject()
    private readonly prisma: PrismaService
  
}