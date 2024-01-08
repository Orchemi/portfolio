import { connectToDatabase, disconnectToDatabase } from '@/helpers/server-helpers';
import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/prisma';
import bcrypt from 'bcrypt';

export const POST = async (request: NextRequest) => {
  try {
    const { name, email, password } = await request.json();
    if (!name || !email || !password)
      return NextResponse.json(
        {
          code: 'INVALID_DATA',
          message: 'Invalid Data',
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
    console.log(existingUser);
    if (existingUser)
      return NextResponse.json(
        {
          code: 'ALREADY_EXISTS_USER',
          message: 'User already exists',
        },
        { status: 422 },
      );

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
        message: 'Server Error',
      },
      { status: 500 },
    );
  } finally {
    await disconnectToDatabase();
  }
};
