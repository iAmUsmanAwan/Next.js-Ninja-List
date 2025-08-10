import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Ninja List | Details Page',
    description: 'Details about our ninjas and activities.',
};

export default function DetailsPage() {
    return (
        <>
        <h1>Details Page</h1>
        
        <Link href="/">Go to Home Page</Link> <br /><br /><br />
        <Link href="/about/ninjas">Go to Ninjas Page</Link>
        </>
    );
}
