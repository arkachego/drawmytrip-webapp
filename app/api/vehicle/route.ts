// Libraries
import { NextRequest, NextResponse } from 'next/server';

// Services
import { readVehicle, createVehicle } from '@/services/vehicle';

// Integrations
import { verifyRequestor } from '@/integrations/cognito';

export async function GET(request: NextRequest) {
  try {
    const { sub: userId } = await verifyRequestor(request);

    const payload = await readVehicle(
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
    const vehicle = await request.json();

    const payload = await createVehicle({
      ...vehicle,
      user_id: userId,
    });
    return NextResponse.json(payload, { status: 201 });
  }
  catch (error) {
    console.log(error);
    return NextResponse.json({ status: 500 }, { status: 500 });
  }

};
