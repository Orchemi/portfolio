import { connectToDatabase, disconnectToDatabase } from '@/helpers/server-helpers';
import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/prisma';
import bcrypt from 'bcrypt';
import { ERROR, ERROR_MESSAGE } from '@/constants/error.constant';

export const POST = async (request: NextRequest) => {
  try {
    const { name, email, password } = await request.json();
    if (!name || !email || !password)
      return NextResponse.json(
        {
          code: ERROR.INVALID_DATA,
          message: ERROR_MESSAGE[ERROR.INVALID_DATA].EN,
        },
        { status: 422 },
      );

    await connectToDatabase();

    // 같은 이메일이 있는지 확인
    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (existingUser) {
      console.log('existingUser', existingUser);
      return NextResponse.json(
        {
          code: ERROR.ALREADY_EXISTS_USER,
          message: ERROR_MESSAGE[ERROR.ALREADY_EXISTS_USER].EN,
        },
        { status: 422 },
      );
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
    return NextResponse.json(
      {
        code: ERROR.SERVER_ERROR,
        message: ERROR_MESSAGE[ERROR.SERVER_ERROR].EN,
      },
      { status: 500 },
    );
  } finally {
    await disconnectToDatabase();
  }
};
