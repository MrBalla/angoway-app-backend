import { Injectable, Inject } from '@nestjs/common';
import { Prisma, Travel } from '@prisma/client';
import { Workbook } from 'exceljs';
import { PrismaService } from 'src/database/prisma.service';
import { countMonthly } from 'src/types/count-monthly.details';
import { weeklyEarnings } from '../types/weekly-earnings.response';

@Injectable()
export class TravelService {
  @Inject()
  private readonly prisma: PrismaService;

  create(): string {
    return 'This action adds a new travel';
  }

  async monthlyCount(
    year?: number,
  ): Promise<{ month: string; travels: number }[] | []> {
    let months: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    const currentYear = year || new Date().getFullYear();

    const monthlyCount = await Promise.all(
      months.map(async (month) => {
        const travelCount = await this.prisma.travel.count({
          where: {
            createdAt: {
              gte: new Date(currentYear, month - 1, 1), 
              lt: new Date(currentYear, month, 0),
            },
          },
        });
        return travelCount;
      }),
    );

    return [
      { month: 'jan', travels: monthlyCount[0] },
      { month: 'feb', travels: monthlyCount[1] },
      { month: 'mar', travels: monthlyCount[2] },
      { month: 'apr', travels: monthlyCount[3] },
      { month: 'may', travels: monthlyCount[4] },
      { month: 'jun', travels: monthlyCount[5] },
      { month: 'jul', travels: monthlyCount[6] },
      { month: 'aug', travels: monthlyCount[7] },
      { month: 'sept', travels: monthlyCount[8] },
      { month: 'oct', travels: monthlyCount[9] },
      { month: 'nov', travels: monthlyCount[10] },
      { month: 'dec', travels: monthlyCount[11] },
    ];
  }

  async exportMonthlyTravelsExcel(
    data: { month: string; travels: number }[],
  ): Promise<Buffer> {
    const workbook = new Workbook();
    const worksheet = workbook.addWorksheet('Monthly Travels');

    const months = data.map((item) => item.month.toUpperCase());
    worksheet.addRow(months);

    worksheet.addRow(data.map((item) => item.travels));

    const headerRow = worksheet.getRow(1);
    headerRow.height = 25;
    headerRow.eachCell((cell) => {
      cell.font = { bold: true, color: { argb: 'FFFFFFFF' } };
      cell.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'FF0C6BFF' }, // using our main color
      };
      cell.alignment = { vertical: 'middle', horizontal: 'center' };
    });

    worksheet.columns = data.map(() => ({ width: 15 }));

    const arrayBuffer = await workbook.xlsx.writeBuffer();
    const buffer = Buffer.from(arrayBuffer);
    return buffer;
  }

  async weeklyEarnings(startDate?: Date,): Promise</*weeklyEarnings*/any> {
		const today = new Date();
        const sevenDaysAgo = new Date(today);
        sevenDaysAgo.setDate(today.getDate() - 7);
        sevenDaysAgo.setHours(0, 0, 0, 0);
		const yesterday = new Date(today);
        yesterday.setDate(today.getDate() - 1);
		yesterday.setHours(23, 59, 59, 999);
			
		let firstDate = sevenDaysAgo;
		let lastDate = yesterday;
			
		if (startDate){
			const endDate = new Date(startDate);
            endDate.setDate(startDate.getDate() + 6);``
			endDate.setHours(23, 59, 59, 999);
			if (startDate < sevenDaysAgo){
				firstDate = startDate;
				lastDate = endDate;
			}
		}

  weekTravels = await prisma.findMany({
     where: { 
       creat_at 
     },
  });
		return { firstDate, lastDate };
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
