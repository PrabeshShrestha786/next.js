import { NextResponse } from "next/server";

export async function POST(request) {
  const { name, message } = await request.json();

  // basic validation
  if (!name || !message) {
    return NextResponse.json(
      { success: false, error: "name and message are required" },
      { status: 400 }
    );
  }

  return NextResponse.json({
    success: true,
    received: { name, message },
    message: "Contact form submitted successfully ✅",
  });
}
