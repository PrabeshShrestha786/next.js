// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Home Page</h1>
      <p>Welcome to the Home Page!</p>
      <br />

      {/* Link to the About page */}
      <Link href="/about">Go to About Page</Link>
    </div>
  );
}
