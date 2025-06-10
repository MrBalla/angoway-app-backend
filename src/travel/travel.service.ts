import { Injectable, Inject, HttpStatus } from '@nestjs/common';
import { Prisma, Travel } from '@prisma/client';
import { Workbook } from 'exceljs';
import { PrismaService } from 'src/database/prisma.service';
import { countMonthly } from 'src/types/count-monthly.details';
import { weeklyEarnings } from '../types/weekly-earnings.response';
import { ResponseBody } from 'src/types/response.body';
import { number } from 'zod';

interface ProfitRecord {
  profit: number;
  createdAt: Date;
}

@Injectable()
export class TravelService {
  @Inject()
  private readonly prisma: PrismaService;

  async create(data:Prisma.TravelCreateInput): Promise<ResponseBody> {
    const travel = await this.prisma.travel.create({
      data: data
    });

    if (travel) {
      return {
        code: HttpStatus.CREATED,
        message:"Registro Criado !"
      }
    }

    return {
      code: HttpStatus.INTERNAL_SERVER_ERROR,
      message: 'Erro ao criar registro de viagem !',
    };
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

  async weeklyEarnings(startDate?: Date): Promise<weeklyEarnings[]> {
    const firstDayOfTheWeek = startDate || null;
    const { firstDate, lastDate } = this.getRangeDate(firstDayOfTheWeek);

    const weekProfit = await this.prisma.travel.findMany({
      where: {
        createdAt: {
          gte: firstDate,
          lte: lastDate,
        },
      },
      select: {
        profit: true,
        createdAt: true,
      },
    });
    const profitGroup: Record<number, ProfitRecord> = {};
    weekProfit.forEach((week) => {
      const day = week.createdAt.getDate();
      if (!profitGroup[day]) {
        profitGroup[day] = {
          profit: 0,
          createdAt: week.createdAt,
        };
      }
      profitGroup[day].profit += Number(week.profit);
    });

    const result: weeklyEarnings[] = [];
    for (let i = 0; i < 7; i++) {
      const actualDay = new Date(firstDate);
      actualDay.setDate(new Date(firstDate).getDate() + i);

      const bill = profitGroup[actualDay.getDate()]?.profit || 0;
      result.push({
        day: actualDay.getDate(),
        bill,
      });
    }

    return result.sort((aDate, bDate) => {
      const dataA = profitGroup[aDate.day]?.createdAt || new Date(firstDate);
      const dataB = profitGroup[bDate.day]?.createdAt || new Date(firstDate);
      return dataA.getTime() - dataB.getTime();
    });
  }

  getRangeDate(startDate: Date | null): { firstDate: Date; lastDate: Date } {
    const today = new Date();
    const sevenDaysAgo = new Date(today);
    sevenDaysAgo.setDate(today.getDate() - 7);
    sevenDaysAgo.setHours(0, 0, 0, 0);
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
    yesterday.setHours(23, 59, 59, 999);

    let firstDate = sevenDaysAgo;
    let lastDate = yesterday;

    if (startDate !== null) {
      const endDate = new Date(startDate);
      endDate.setDate(startDate.getDate() + 6);
      endDate.setHours(23, 59, 59, 999);
      if (startDate < sevenDaysAgo) {
        firstDate = startDate;
        lastDate = endDate;
      }
    }
    return { firstDate, lastDate };
  }

  async findAll():Promise<Travel[]> {
    return await this.prisma.travel.findMany();
  }

  async findOne(id: number): Promise<Travel | null> {
    return await this.prisma.travel.findUnique({
      where: { id },
    });
  }

  async remove(id: number) {
    return await this.prisma.travel.delete({
      where:{id}
    });
  }
}
