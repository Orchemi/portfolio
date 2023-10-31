import mongoDBConnect from 'libs/mongodb';
import Greeting from 'models/greeting';
import { NextRequest, NextResponse } from 'next/server';

interface IParams {
  params: { id: string };
}
export async function PUT(request: NextRequest, { params: { id } }: IParams) {
  try {
    // Get the data from the request
    const { title, description, tags } = await request.json();
    const newGreeting = { title, description, tags };

    // Connect to the DB
    await mongoDBConnect();

    // Use the Model to update
    await Greeting.findByIdAndUpdate(id, newGreeting);
    return NextResponse.json(
      {
        message: 'Greeting successfully updated',
        success: true,
        data: newGreeting,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error(error);
  }
}

export async function DELETE(request: NextRequest, { params: { id } }: IParams) {
  try {
    // Connect to the DB
    await mongoDBConnect();

    // Use the Model to delete
    await Greeting.findByIdAndDelete(id);
    return NextResponse.json(
      {
        message: 'Greeting successfully deleted',
        success: true,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error(error);
  }
}
