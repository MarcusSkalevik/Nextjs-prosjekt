import React from 'react';
import styles from '../books.module.css';
import Link from 'next/link';

const NavBar = () => {
  return (
    <div className={styles.navBar}>
      <Link href="https://www.google.com/">
        <button className={styles.navButton}>
          <h2 className={styles.navText}>Bok</h2>
          <h2 className={styles.navText}>nyheter</h2>
        </button>
      </Link>
      <Link href="https://www.google.com/">
        <button className={styles.navButton}>
          <h2 className={styles.navText}>Bok</h2>
          <h2 className={styles.navText}>tilbud</h2>
        </button>
      </Link>
      <Link href="https://www.google.com/">
        <button className={styles.navButton}>
          <h2 className={styles.navText}>Toplister</h2>
        </button>
      </Link>
      <Link href="https://www.google.com/">
        <button className={styles.navButton}>
          <h2 className={styles.navText}>Gavekort</h2>
        </button>
      </Link>
    </div>
  );
};

export default NavBar;
