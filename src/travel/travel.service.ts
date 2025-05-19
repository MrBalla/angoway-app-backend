import { Injectable, Inject } from '@nestjs/common';
import { Prisma, Travel } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';
import { countMonthly } from 'src/types/count-monthly.details'

@Injectable()
export class TravelService {
    @Inject()
    private readonly prisma: PrismaService;
  
    create(): string {
        return 'This action adds a new travel';
    }

    async monthlyCount(year?: number): Promise<countMonthly[]> {
        let months: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        const monthsNames: string[] = ["janeiro", "fevereiro", "marco", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"]
        const currentYear = year || new Date().getFullYear();

  // Use Promise.all para aguardar todas as promessas de contagem de viagens
        const monthlyCount = await Promise.all(
            months.map(async (month) => {
                const travelCount = await this.prisma.travel.count({
                    where: {
                        createdAt: {
                            gte: new Date(currentYear, month - 1, 1), // primeira data do mes
                            lt: new Date(currentYear, month, 0),      // ultima data do mes
                        },
                    },
                });
                return { month: monthsNames[month - 1], travels: travelCount };
            })
        );
        
        return monthlyCount;
    }
    
  findAll() {
    return `This action returns all travel`;
  }

  findOne(id: number) {
    return `This action returns a #${id} travel`;
  }

remove(id: number) {
    return `This action removes a #${id} travel`;
  }
}
