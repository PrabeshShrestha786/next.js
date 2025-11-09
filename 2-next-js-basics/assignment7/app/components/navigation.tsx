'use client';

import Link from 'next/link';
import './navigation.css'; // optional if you want to style it

export default function Navigation() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
      </ul>
    </nav>
  );
}
