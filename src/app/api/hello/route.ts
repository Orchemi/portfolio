// [velog] https://velog.io/@dokkabei97/Next.js-13%EB%B2%84%EC%A0%84-API-%EB%A7%8C%EB%93%9C%EB%8A%94-%EB%B2%95
// [Next13 docs] https://nextjs.org/docs/app/building-your-application/routing/route-handlers

import mongoDBConnect from 'libs/mongodb';
import Greeting from 'models/greeting';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  try {
    // Connect to the DB
    await mongoDBConnect();

    // Get data from the Model
    const greetings = await Greeting.find();
    return NextResponse.json(
      {
        message: 'Ok',
        data: greetings,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error(error);
  }
}

// 참고: https://www.youtube.com/watch?v=nERpb57brK0&t=5693s
export async function POST(request: NextRequest) {
  try {
    // Get the data from the request
    const { title, description, tags } = await request.json();
    const newGreeting = { title, description, tags };

    // Connect to the DB
    await mongoDBConnect();

    // Use the Model to create
    await Greeting.create(newGreeting);
    return NextResponse.json(
      {
        message: 'Greeting successfully created',
        success: true,
        data: newGreeting,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error(error);
  }
}
