
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="not-found">
        <h1>Oooooppssss ....</h1>
        <h2>this address is not available.</h2>
        <h3><Link href="/" >Go back to the Home page</Link></h3>
        
    </div>
  )
}

