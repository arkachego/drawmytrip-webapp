import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest, { params }: { params: { model: string } }) {
  const { model } = await params;
  const body = await req.json();
  
  console.log({
    model,
    body,
    message: `Handled POST request for: ${model}`,
  })

  return NextResponse.json({
    hasMore: false,
    searchResult: [],
  });
}
