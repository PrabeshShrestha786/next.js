import { NextResponse } from "next/server";
import { findUserById } from "../store";

export async function GET(request, { params }) {
  const { id } = await params;

  const user = findUserById(id);

  if (!user) {
    return NextResponse.json({ error: "User not found", id }, { status: 404 });
  }

  return NextResponse.json(user);
}
