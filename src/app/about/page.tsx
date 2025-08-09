import Link from 'next/link';

// This is the About page of the application.

export default function AboutPage() {
    return <> 
    <h1>About Us page</h1>
    <Link href="/">Go to Home Page</Link> <br /><br /><br />
    <Link href="/about/ninjas">Go to Ninjas Page</Link>
    </>;
}
