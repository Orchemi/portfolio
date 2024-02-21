import { generateErrorResponse } from '@/app/api/(_helper)/response-error';
import { ERROR } from '@/constants/error.constant';
import { connectToDatabase, disconnectToDatabase } from '@/helpers/server-helpers';
import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcrypt';

export const POST = async (request: NextRequest) => {
  try {
    const { email, password } = await request.json();
    if (!email || !password) {
      return generateErrorResponse({
        status: 422,
        code: ERROR.INVALID_DATA,
      });
    }

    await connectToDatabase();
    const user = await prisma?.user.findUnique({
      where: {
        email,
      },
    });

    const isPasswordCorrect = await bcrypt.compare(password, user?.hashedPassword ?? '');
    if (!user || !isPasswordCorrect) {
      return generateErrorResponse({
        status: 422,
        code: ERROR.INVALID_DATA,
      });
    }

    return NextResponse.json(
      {
        user,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error(error);
  } finally {
    await disconnectToDatabase();
  }
};
