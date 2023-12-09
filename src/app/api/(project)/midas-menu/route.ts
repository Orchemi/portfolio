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
    const { key, menu } = await request.json();
    const newMidasMenu = { key, menu };

    await mongoDBConnect();

    const serverNewMidasMenu = await MidasMenu.create(newMidasMenu);
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
    const { key, menu } = await request.json();
    const newMidasMenu = { key, menu };

    await mongoDBConnect();

    const serverNewMidasMenu = await MidasMenu.findOneAndUpdate({ key: key }, newMidasMenu, { new: true });
    if (!serverNewMidasMenu) {
      const serverNewMidasMenu = await MidasMenu.create(newMidasMenu);
      return NextResponse.json(
        {
          message: 'MidasMenu successfully created',
          success: true,
          data: serverNewMidasMenu,
        },
        { status: 201 },
      );
    }
    return NextResponse.json(
      {
        message: 'MidasMenu successfully updated',
        success: true,
        data: serverNewMidasMenu,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error(error);
  }
}
