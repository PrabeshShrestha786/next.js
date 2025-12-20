type Post = {
  id: number;
  title: string;
};

export const revalidate = 10; // N seconds (ISR)

async function getPosts(): Promise<Post[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 10 }, 
  });

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  return res.json();
}

export default async function BlogPage() {
  const posts = await getPosts();
  const timestamp = new Date().toISOString();

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-2">Blog (ISR)</h1>

      <p className="mb-4">
        <b>Last updated:</b> {timestamp}
      </p>

      <ul className="list-disc pl-6 space-y-1">
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </main>
  );
}
