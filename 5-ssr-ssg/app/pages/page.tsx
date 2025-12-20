type Post = {
  id: number;
  title: string;
};

export const dynamic = "force-static"; // ensures this page is treated as static (SSG)

async function getPosts(): Promise<Post[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  const data = (await res.json()) as Post[];
  return data;
}

export default async function PagesBlog() {
  const posts = await getPosts();

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Build-Time Blog Page</h1>

      <ul className="list-disc pl-6 space-y-1">
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </main>
  );
}
