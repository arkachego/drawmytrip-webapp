// Libraries
import { NextRequest, NextResponse } from 'next/server';

// Services
import { readUser, createUser } from '@/services/user';

// Integrations
import { verifyRequestor } from '@/integrations/cognito';

export async function GET(request: NextRequest) {
  try {
    const { sub: userId } = await verifyRequestor(request);

    const payload = await readUser(
      userId as string,
    );
    return NextResponse.json(payload, { status: 200 });
  }
  catch (error) {
    console.log(error);
    return NextResponse.json({ status: 500 }, { status: 500 });
  }
};

export async function POST(request: NextRequest) {
  try {
    const { sub: userId } = await verifyRequestor(request);
    const { first_name, last_name, email } = await request.json();

    const payload = await createUser({
      id: userId as string,
      first_name,
      last_name,
      email,
  });
    return NextResponse.json(payload, { status: 200 });
  }
  catch (error) {
    console.log(error);
    return NextResponse.json({ status: 500 }, { status: 500 });
  }
};
