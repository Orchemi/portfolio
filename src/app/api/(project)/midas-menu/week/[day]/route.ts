import { MidasMenuDateType } from '@/types/(project)/midasMenu/midasMenu';
import { formDateYYYYMMDD, getOneWeek } from '@/utils/date';
import mongoDBConnect from 'libs/mongodb';
import MidasMenu from 'models/(project)/midas-menu/midasMenu';
import { NextRequest, NextResponse } from 'next/server';

interface IParams {
  params: { day: MidasMenuDateType };
}

export async function GET(request: NextRequest, { params: { day } }: IParams) {
  try {
    await mongoDBConnect();

    const week = getOneWeek(day).slice(0, 5);
    const midasWeeklyMenu = await Promise.all(
      week.map(async (oneDay) => {
        const dailyMenu = await MidasMenu.findOne({ date: formDateYYYYMMDD(oneDay) });
        return dailyMenu;
      }),
    );
    return NextResponse.json(
      {
        message: 'Ok',
        data: midasWeeklyMenu,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error(error);
  }
}
