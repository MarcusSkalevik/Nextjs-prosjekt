import React from 'react';
import styles from '../books.module.css';
import Link from 'next/link';


  const NavBar = () => {
    return (
      <div className={styles.navBar}>
        <Link href="https://www.google.com/">
          <button className={styles.navButton}>
            <h2>Boknyheter</h2>
          </button>
        </Link>
        <Link href="https://www.google.com/">
          <button className={styles.navButton}>
            <h2>Boktilbud</h2>
          </button>
        </Link>
        <Link href="https://www.google.com/">
          <button className={styles.navButton}>
            <h2>Toplister</h2>
          </button>
        </Link>
        <Link href="https://www.google.com/">
          <button className={styles.navButton}>
            <h2>Gavekort</h2>
          </button>
        </Link>
      </div>
    );
  };
  
  export default NavBar;
  
