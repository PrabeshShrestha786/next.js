import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { id } = await params; //  unwrap the Promise

  return NextResponse.json({
    id,
    name: `Product ${id}`,
    price: 100 + Number(id),
    description: `This is a mock description for product ${id}.`,
  });
}
