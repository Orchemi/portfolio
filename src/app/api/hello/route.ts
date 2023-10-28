// [velog] https://velog.io/@dokkabei97/Next.js-13%EB%B2%84%EC%A0%84-API-%EB%A7%8C%EB%93%9C%EB%8A%94-%EB%B2%95
// [Next13 docs] https://nextjs.org/docs/app/building-your-application/routing/route-handlers

import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ hello: 'world' });
}
