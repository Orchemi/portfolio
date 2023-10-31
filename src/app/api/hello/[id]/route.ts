import mongoDBConnect from 'libs/mongodb';
import Greeting from 'models/greeting';
import { NextRequest, NextResponse } from 'next/server';

interface IUpdateGreetingParams {
  params: { id: string };
}
export async function PUT(request: NextRequest, { params: { id } }: IUpdateGreetingParams) {
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
