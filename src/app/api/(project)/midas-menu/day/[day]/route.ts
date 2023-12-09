import { MidasMenuDateType } from '@/types/(project)/midasMenu/midasMenu';
import mongoDBConnect from 'libs/mongodb';
import MidasMenu from 'models/(project)/midas-menu/midasMenu';
import { NextResponse } from 'next/server';

interface IParams {
  params: { day: MidasMenuDateType };
}

export async function GET({ params: { day } }: IParams) {
  try {
    // Connect to the DB
    await mongoDBConnect();

    // Get data from the Model
    const midasDailyMenu = await MidasMenu.findOne({ key: day });
    return NextResponse.json(
      {
        message: 'Ok',
        data: midasDailyMenu,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error(error);
  }
}
