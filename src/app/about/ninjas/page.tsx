import Link from 'next/link';
import type { Metadata } from 'next';
import styles from './Ninjas.module.css';

// Metadata for this page only
export const metadata: Metadata = {
    title: 'Ninja List | Ninja page',
    description: 'Learn more about the Ninja List team.',
};

// Fetch data (Server Component)
async function getNinjas() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    return res.json();
}

export default async function NinjaPage() {
    const ninjas = await getNinjas();

    return (
        <>
        <h1>Ninja page (About Us)</h1>
        <h3>All Ninjas wear black for stealth</h3>
        <br /><br /><br />

        {ninjas.map((ninja: any) => (
            <Link
            href={`/ninjas/${ninja.id}`}
            key={ninja.id}
            className={styles.single}
            >
            <h3>{ninja.name}</h3>
            </Link>
        ))}

        <br /><br /><br />
        <Link href="/">Go to Home Page</Link>
        </>
    );
}
