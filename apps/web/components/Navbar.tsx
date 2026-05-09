import Link from 'next/link';
import styles from './Navbar.module.css';
import { Home } from 'lucide-react';

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <span>Prompt</span>Library
        </Link>
        
        <div className={styles.links}>
          <Link href="/" className={styles.navLink}>
            <Home size={20} />
            <span>Feed</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};
