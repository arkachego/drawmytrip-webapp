// Libraries
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from "@/utilities/database";

export async function GET(request: NextRequest) {
  try {
    const id = request.headers.get('x-user-id');
    const email = request.headers.get('x-user-email');
    
    const countries = await prisma.countries.findMany();

    return NextResponse.json(countries, { status: 200 });
  }
  catch (error) {
    console.log(error);
    return NextResponse.json({ status: 500 }, { status: 500 });
    
  }

};
