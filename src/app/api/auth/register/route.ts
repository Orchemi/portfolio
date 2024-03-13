import { connectToDatabase, disconnectToDatabase } from '@/helpers/server-helpers';
import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/prisma';
import bcrypt from 'bcrypt';
import { ERROR } from '@constants/error.constant';
import { generateErrorResponse } from '@/app/api/(_helper)/response-error';

export const POST = async (request: NextRequest) => {
  try {
    const { name, email, password } = await request.json();
    if (!name || !email || !password) {
      return generateErrorResponse({
        status: 422,
        code: ERROR.INVALID_DATA,
      });
    }

    await connectToDatabase();

    // 같은 이메일이 있는지 확인
    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (existingUser) {
      return generateErrorResponse({
        status: 422,
        code: ERROR.ALREADY_EXISTS_USER,
      });
    }

    // 비밀번호 해싱
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        hashedPassword,
      },
    });
    return NextResponse.json(
      {
        user: newUser,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error(error);
    return generateErrorResponse({
      status: 500,
      code: ERROR.SERVER_ERROR,
    });
  } finally {
    await disconnectToDatabase();
  }
};
