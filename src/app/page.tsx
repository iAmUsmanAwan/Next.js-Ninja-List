import Link from 'next/link';
import styles from './Home.module.css';

export default function HomePage() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Welcome to Home page</h1>  
      <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam exercitationem facilis deserunt blanditiis modi rem aperiam placeat libero, quibusdam pariatur officiis aspernatur, reprehenderit, assumenda velit ex cumque. Doloremque, explicabo impedit.</p>

      <br />
      <Link href="/about" className={styles.btn}>Go to About Page</Link>
      
    </main>
  );
}
