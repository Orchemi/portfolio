import mongoDBConnect from 'libs/mongodb';
import MidasMenu from 'models/(project)/midas-menu/midasMenu';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  try {
    await mongoDBConnect();

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

export async function POST(request: NextRequest) {
  try {
    const { date, menus } = await request.json();
    const newMidasMenus = { date, menus };

    await mongoDBConnect();

    const serverNewMidasMenu = await MidasMenu.create(newMidasMenus);
    return NextResponse.json(
      {
        message: 'MidasMenu successfully created',
        success: true,
        data: serverNewMidasMenu,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error(error);
  }
}

export async function PUT(request: NextRequest) {
  try {
    const { date, menus } = await request.json();
    const newMidasMenus = { date, menus };

    await mongoDBConnect();

    const serverNewMidasMenus = await MidasMenu.findOneAndUpdate({ date: date }, newMidasMenus, { new: true });
    if (!serverNewMidasMenus) {
      const serverNewMidasMenus = await MidasMenu.create(newMidasMenus);
      return NextResponse.json(
        {
          message: 'MidasMenu successfully created',
          success: true,
          data: serverNewMidasMenus,
        },
        { status: 201 },
      );
    }
    return NextResponse.json(
      {
        message: 'MidasMenu successfully updated',
        success: true,
        data: serverNewMidasMenus,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error(error);
  }
}
