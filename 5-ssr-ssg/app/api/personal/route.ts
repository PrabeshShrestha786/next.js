import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    user: "Prabesh",
    serverTime: new Date().toISOString(),
    randomNumber: Math.floor(Math.random() * 10000),
  });
}
