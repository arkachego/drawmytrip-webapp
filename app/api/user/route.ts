// /app/api/health/route.ts

import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const id = request.headers.get('x-user-id');
  const email = request.headers.get('x-user-email');

  console.log(`${id} ${email}`);

  return NextResponse.json({ status: 'OK' }, { status: 200 });
};
