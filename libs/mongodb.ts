import { MONGODB_URI } from '@/utils/env';
import mongoose from 'mongoose';

export default async function mongoDBConnect() {
  try {
    await mongoose.connect(MONGODB_URI);
  } catch (error) {
    console.error(error);
  }
}
