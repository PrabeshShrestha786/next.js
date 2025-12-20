import { headers } from "next/headers";

type NewsResponse = {
  generatedAt: string;
  posts: { id: number; title: string }[];
};

type PersonalResponse = {
  user: string;
  serverTime: string;
  randomNumber: number;
};

async function getBaseUrl() {
  const h = await headers();
  const host = h.get("host"); // e.g. localhost:3000
  const proto = h.get("x-forwarded-proto") ?? "http";
  return `${proto}://${host}`;
}

export default async function HybridPage() {
  const baseUrl = await getBaseUrl();

  const N = 10;

  // Static/ISR section (cached)
  const newsRes = await fetch(`${baseUrl}/api/news`, {
    next: { revalidate: N },
  });
  if (!newsRes.ok) throw new Error("Failed to load news");
  const news = (await newsRes.json()) as NewsResponse;

  // Dynamic/SSR section (always fresh)
  const personalRes = await fetch(`${baseUrl}/api/personal`, {
    cache: "no-store",
  });
  if (!personalRes.ok) throw new Error("Failed to load personal data");
  const personal = (await personalRes.json()) as PersonalResponse;

  return (
    <main className="p-6 space-y-8">
      <h1 className="text-3xl font-bold">Hybrid Rendering</h1>

      <section className="border rounded-lg p-4">
        <h2 className="text-xl font-semibold mb-2">Static section (SSG/ISR)</h2>
        <p className="mb-3">
          Cached data (revalidates every <b>{N}</b> seconds)
        </p>
        <p className="mb-4">
          <b>News generated at:</b> {news.generatedAt}
        </p>

        <ul className="list-disc pl-6 space-y-1">
          {news.posts.map((p) => (
            <li key={p.id}>{p.title}</li>
          ))}
        </ul>
      </section>

      <section className="border rounded-lg p-4">
        <h2 className="text-xl font-semibold mb-2">Dynamic section (SSR)</h2>
        <p className="mb-4">This changes on every refresh.</p>

        <p>
          Welcome, <b>{personal.user}</b>!
        </p>
        <p>
          <b>Server time:</b> {personal.serverTime}
        </p>
        <p>
          <b>Random number:</b> {personal.randomNumber}
        </p>
      </section>
    </main>
  );
}
