"use client";

import Link from 'next/link'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation'; //  App Router API

const NotFound = () => {

  const Router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      Router.push('/'); // Redirect to home page after 3 seconds
    },(3000));
  }, [])

  

  return (
    <div className="not-found">
        <h1>Oooooppssss ....</h1>
        <h2>this address is not available.</h2>
        <h3><Link href="/" >Go back to the Home page</Link></h3>
        
        <h3>or wait for 3 seconds to be redirected.</h3>
        <h3>Thank you for your patience.</h3>

    </div>
  );
}

export default NotFound 