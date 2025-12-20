type Profile = {
  name: string;
};

export default async function ProfilePage() {
  const res = await fetch("http://localhost:3000/api/profile", {
    cache: "no-store", // forces SSR (fresh on every request)
  });

  if (!res.ok) {
    throw new Error("Failed to fetch profile");
  }

  const profile = (await res.json()) as Profile;

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-2">Server Rendered Profile</h1>
      <p className="text-lg">Welcome, <b>{profile.name}</b>!</p>
    </main>
  );
}
