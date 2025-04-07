// Libraries
import { NextRequest, NextResponse } from 'next/server';

// Services
import { readVehicles, createVehicle, updateVehicle, deleteVehicle } from '@/services/vehicle';

// Integrations
import { verifyRequestor } from '@/integrations/cognito';

export async function GET(request: NextRequest) {
  try {
    const { sub: userId } = await verifyRequestor(request);

    const payload = await readVehicles(
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

    const payload = await createVehicle(
      userId as string,
      vehicle,
    );
    return NextResponse.json(payload, { status: 201 });
  }
  catch (error) {
    console.log(error);
    return NextResponse.json({ status: 500 }, { status: 500 });
  }
};

export async function PUT(request: NextRequest) {
  try {
    const { sub: userId } = await verifyRequestor(request);
    const vehicle = await request.json();
    const { id, ...rest } = vehicle;

    const payload = await updateVehicle(
      userId as string,
      id as string,
      rest,
    );
    return NextResponse.json(payload, { status: 200 });
  }
  catch (error) {
    console.log(error);
    return NextResponse.json({ status: 500 }, { status: 500 });
  }
};

export async function DELETE(request: NextRequest) {
  try {
    const { sub: userId } = await verifyRequestor(request);
    const url = new URL(request.url);
    const vehicleId = url.searchParams.get("id");

    await deleteVehicle(
      userId as string,
      vehicleId as string,
    );
    return NextResponse.json({ message: 'Deleted' }, { status: 200 });
  }
  catch (error) {
    console.log(error);
    return NextResponse.json({ status: 500 }, { status: 500 });
  }
};