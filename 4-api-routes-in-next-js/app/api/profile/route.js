import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({
    name: "Prabesh",
    age: 20,
  });
}
