import { NextResponse } from "next/server";

export async function GET() {
  // You can change this to any name you want
  return NextResponse.json({
    name: "Prabesh",
  });
}
