import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Course Project - 4 Views",
  description: "Next.js project with 4 views (home, calculator, editor, quiz)",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="header">
          <div className="container headerInner">
            <div className="brand">Next.js Course Project</div>
            <nav className="nav">
              <Link href="/">Home</Link>
              <Link href="/calculator">Calculator</Link>
              <Link href="/editor">Editor</Link>
              <Link href="/quiz">Quiz</Link>
            </nav>
          </div>
        </header>

        <main className="container">{children}</main>

        <footer className="footer">
          <div className="container">
            Built with Next.js (routing, components, state, events)
          </div>
        </footer>
      </body>
    </html>
  );
}
