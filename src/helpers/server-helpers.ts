import prisma from '@/prisma';

export const connectToDatabase = async () => {
  try {
    await prisma.$connect();
  } catch (error) {
    console.error(error);
    throw new Error('Unable to connect to database');
  }
};

export const disconnectToDatabase = async () => {
  try {
    await prisma.$disconnect();
  } catch (error) {
    console.error(error);
    throw new Error('Unable to disconnect from database');
  }
};
