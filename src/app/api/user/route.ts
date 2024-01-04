import { connectToDatabase, disconnectToDatabase } from '@/helpers/server-helpers';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    await connectToDatabase();
    const users = await prisma?.user.findMany();
    return NextResponse.json(
      {
        users,
      },
      {
        status: 200,
      },
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        error: 'server error',
      },
      {
        status: 500,
      },
    );
  } finally {
    await disconnectToDatabase();
  }
}
