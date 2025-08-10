import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
    return <nav> 
    <div className="logo">
        <Image src="/catLogo.jpg" width={120} height={60} alt="Cat logo" />
    </div>
    <Link href="/" >Home page</Link>  <br />
    <Link href="/about">About page</Link>   <br />
    <Link href="/about/ninjas">Ninja listings</Link>    <br />
    </nav>;
}
