import React from 'react';
import styles from '../books.module.css';
import Link from 'next/link';


const NavBar = () => {
  return (
    
    <div className={styles.navBar}>
      <Link href="https://www.google.com/">
        <button className={styles.navButton}>
          <h2 className={styles.navText}>Book</h2>
          <h2 className={styles.navText}>news</h2>
        </button>
      </Link>
      <Link href="https://www.google.com/">
        <button className={styles.navButton}>
          <h2 className={styles.navText}>Book</h2>
          <h2 className={styles.navText}>discounts</h2>
        </button>
      </Link>
      <Link href="https://www.google.com/">
        <button className={styles.navButton}>
          <h2 className={styles.navText}>Toplists</h2>
        </button>
      </Link>
      <Link href="https://www.google.com/">
        <button className={styles.navButton}>
          <h2 className={styles.navText}>Gift cards</h2>
        </button>
      </Link>
    </div>
  );
};

export default NavBar;
