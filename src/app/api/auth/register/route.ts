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
          message: 'Invalid Data',
        },
        { status: 422 },
      );

    await connectToDatabase();
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
    console.log(error);
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
