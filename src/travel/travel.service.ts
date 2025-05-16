import { Injectable, Inject } from '@nestjs/common';
import { Prisma, Travel } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';
import { countMonthly } from 'src/types/count-monthly.details'
import { CreateTravelDto } from './dto/create-travel.dto';
import { UpdateTravelDto } from './dto/update-travel.dto';

@Injectable()
export class TravelService {
    @Inject()
    private readonly prisma: PrismaService;
  create(createTravelDto: CreateTravelDto) {
    return 'This action adds a new travel';
  }

    async monthlyCount(year?: number): Promise<countMonthly> {
        let months: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        const currentYear = year || new Date().getFullYear();

  // Use Promise.all para aguardar todas as promessas de contagem de viagens
        const monthlyCount = await Promise.all(
            months.map(async (month) => {
                const travelCount = await this.prisma.travel.count({
                    where: {
                        createdAt: {
                            gte: new Date(currentYear, month - 1, 1), // Primeira data do mês
                            lt: new Date(currentYear, month, 0),      // Última data do mês
                        },
                    },
                });
                return travelCount; // Retorna a contagem do mês
            })
        );

        return {
            jan: monthlyCount[0],
            feb: monthlyCount[1],
            mar: monthlyCount[2],
            apr: monthlyCount[3],
            may: monthlyCount[4],
            jun: monthlyCount[5],
            jul: monthlyCount[6],
            aug: monthlyCount[7],
            sep: monthlyCount[8],
            oct: monthlyCount[9],
            nov: monthlyCount[10],
            dec: monthlyCount[11],
        };
    }
    
  findAll() {
    return `This action returns all travel`;
  }

  findOne(id: number) {
    return `This action returns a #${id} travel`;
  }

  update(id: number, updateTravelDto: UpdateTravelDto) {
    return `This action updates a #${id} travel`;
  }

  remove(id: number) {
    return `This action removes a #${id} travel`;
  }
}
