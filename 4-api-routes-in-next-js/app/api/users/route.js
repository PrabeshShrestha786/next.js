import { NextResponse } from "next/server";
import { users, addUser, emailExists } from "./store";

export async function GET() {
  return NextResponse.json(users);
}

export async function POST(request) {
  const body = await request.json();
  const name = body?.name?.trim();
  const email = body?.email?.trim();

  if (!name || !email) {
    return NextResponse.json({ error: "name and email are required" }, { status: 400 });
  }

  if (emailExists(email)) {
    return NextResponse.json({ error: "email already exists" }, { status: 409 });
  }

  const newUser = addUser({ name, email });

  return NextResponse.json(
    { message: "User created", user: newUser },
    { status: 201 }
  );
}
