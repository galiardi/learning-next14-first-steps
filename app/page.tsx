import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col p-24">
      <span className="text-5xl">Home Page</span>
      <Link href={'./about'}>About Page</Link>
    </main>
  );
}
