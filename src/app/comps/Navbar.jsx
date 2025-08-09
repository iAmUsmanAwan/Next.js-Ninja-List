import Link from 'next/link';
 

export default function Navbar() {
    return <nav> 
    <div className="logo">
        <h1>Ninja List</h1>
    </div>
    <Link href="/" >Home page</Link>  <br />
    <Link href="/about">About page</Link>   <br />
    <Link href="/about/ninjas">Ninja listings</Link>    <br />
    </nav>;
}
