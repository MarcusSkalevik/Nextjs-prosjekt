import React from 'react';
import styles from './page.module.css';
import SiteFooter from '../app/components/siteFooter';

const FrontPage = () => {
  return (
    <main className={styles['bg-image']}>
      <div className={styles['bg-gradient-to-br']}>
        <div className={`${styles['max-w-5xl']} ${styles['center-content']}`}>
        <a href="../"><img className={styles.homeButton} src='https://seeklogo.com/images/B/book-store-logo-AA64B3CB13-seeklogo.com.png'></img></a>
        <br></br>
          <div className={`${styles['grid']} ${styles['grid-cols-1']} md:${styles['grid-cols-2']} ${styles['gap-6']}`}>
            <a href="/books" className={styles['no-underline']}>
              <div className={`${styles['bg-white']} ${styles['rounded-lg']} ${styles['shadow-lg']} ${styles['p-6']}`}>
                <img
                  src="https://cdn0.iconfinder.com/data/icons/tiny-icons-1/100/tiny-03-512.png"
                  alt="Photo"
                  className="w-full h-48 object-cover mb-4 rounded-lg"
                />
                <h2 className={`${styles['text-2xl']} ${styles['font-bold']} ${styles['text-norsk']} ${styles['mb-2']}`}>Books</h2>
              </div>
            </a>
            <a href="https://www.google.com" className={styles['no-underline']}>
              <div className={`${styles['bg-white']} ${styles['rounded-lg']} ${styles['shadow-lg']} ${styles['p-6']}`}>
              <img
                  src="https://cdn0.iconfinder.com/data/icons/tiny-icons-1/100/tiny-15-512.png"
                  alt="Photo"
                  className="w-full h-48 object-cover mb-4 rounded-lg"
                />
                <h2 className={`${styles['text-2xl']} ${styles['font-bold']} ${styles['text-norsk']} ${styles['mb-2']}`}>Reserve</h2>
              </div>
            </a>
            <a href="/about" className={styles['no-underline']}>
              <div className={`${styles['bg-white']} ${styles['rounded-lg']} ${styles['shadow-lg']} ${styles['p-6']}`}>
                <h2 className={`${styles['text-2xl']} ${styles['font-bold']} ${styles['text-norsk']} ${styles['mb-2']}`}>About</h2>
              </div>
            </a>
            <a href="/help" className={styles['no-underline']}>
              <div className={`${styles['bg-white']} ${styles['rounded-lg']} ${styles['shadow-lg']} ${styles['p-6']}`}>
                <h2 className={`${styles['text-2xl']} ${styles['font-bold']} ${styles['text-norsk']} ${styles['mb-2']}`}>Help</h2>
              </div>
            </a>
          </div>
        </div>
      </div>
      <SiteFooter />
    </main>
  );
};

export default FrontPage;
