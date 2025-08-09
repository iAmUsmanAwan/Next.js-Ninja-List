import Link from 'next/link';
import Navbar from './comps/Navbar';
import Footer from './comps/Footer';

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <h1>Welcome to Home page</h1>
      <Link href="/about">Go to About Page</Link>
      <Footer />
      
    </main>
  );
}
