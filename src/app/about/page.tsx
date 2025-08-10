import Link from 'next/link';
import type { Metadata } from 'next';

// This sets the title for ONLY the About page
export const metadata: Metadata = {
  title: 'Ninja List | About Us',
  description: 'Learn more about the Ninja List team.',
};

export default function AboutPage() {
  return (
    <>
      <h1>About Us page</h1>
      <Link href="/">Go to Home Page</Link> <br /><br /><br />
      <Link href="/about/ninjas">Go to Ninjas Page</Link>
    </>
  );
}
