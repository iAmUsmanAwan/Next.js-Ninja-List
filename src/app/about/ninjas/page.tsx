import Link from 'next/link';
import type { Metadata } from 'next';

// This sets the title for ONLY the Ninjas page
export const metadata: Metadata = {
  title: 'Ninja List | Ninja page',
  description: 'Learn more about the Ninja List team.',
};

// This is the ninja page of the application.

export default function NinjaPage() {
    return <> 
    <h1>Ninja page (About Us)</h1><br /><br /><br />
    <h3>All Ninjas wear black for stealth</h3><br /><br /><br />
    <Link href="/">Go to Home Page</Link>
    </>;
}
