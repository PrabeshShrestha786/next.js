import { NextResponse } from "next/server";

type Post = { id: number; title: string };

export async function GET() {
  // Always get fresh posts *when this route is called*
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5", {
    cache: "no-store",
  });

  if (!res.ok) {
    return NextResponse.json({ error: "Failed to fetch posts" }, { status: 500 });
  }

  const posts = (await res.json()) as Post[];

  return NextResponse.json({
    generatedAt: new Date().toISOString(),
    posts: posts.map((p) => ({ id: p.id, title: p.title })),
  });
}
