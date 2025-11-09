import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <h1>Welcome to My Awesome App 🚀</h1>
      <p>
        This app demonstrates how to use Next.js with the new App Router, featuring
        fast navigation and clean design. Enjoy exploring!
      </p>

      <Link href="/about">Go to About Page</Link>
    </main>
  );
}
