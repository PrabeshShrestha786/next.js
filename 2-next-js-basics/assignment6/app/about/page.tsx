// pages/about.js
import Link from 'next/link';

export default function about() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>About Page</h1>
      <p>This is the About Page.</p>
      <br />

      {/* Link back to Home page */}
      <Link href="/">Back to Home</Link>
    </div>
  );
}
