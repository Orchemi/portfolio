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
    // TODO:: 여기서 1주일치 데이터 가져오는 로직 추가
    const midasMenu = await MidasMenu.find();
    return NextResponse.json(
      {
        message: 'Ok',
        data: midasMenu,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error(error);
  }
}
