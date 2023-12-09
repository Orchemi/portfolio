import { MidasMenuDateType } from '@/types/(project)/midasMenu/midasMenu';
import mongoDBConnect from 'libs/mongodb';
import MidasMenu from 'models/(project)/midas-menu/midasMenu';
import { NextResponse, NextRequest } from 'next/server';

interface IParams {
  params: { day: MidasMenuDateType };
}

export async function GET(request: NextRequest, { params: { day } }: IParams) {
  try {
    await mongoDBConnect();
    const midasDailyMenu = await MidasMenu.findOne({ date: day });
    return NextResponse.json(
      {
        message: 'Ok',
        data: midasDailyMenu,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        message: 'Internal Server Error',
        error: error,
      },
      { status: 500 },
    );
  }
}
