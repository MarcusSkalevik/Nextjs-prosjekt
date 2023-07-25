import React from 'react';
import styles from './page.module.css';

const FrontPage = () => {
  return (
    <main className={styles['bg-image']}>
      <div className={styles['bg-gradient-to-br']}>
        <div className={`${styles['max-w-5xl']} ${styles['center-content']}`}>
          <h1 className={`${styles['text-4xl']} md:text-6xl ${styles['font-bold']} ${styles['text-white']} ${styles['mb-8']} ${styles['center-heading']}`}>
            Book Store
          </h1>
          <div className={`${styles['grid']} ${styles['grid-cols-1']} md:${styles['grid-cols-2']} ${styles['gap-6']}`}>
            <a href="/books" className={styles['no-underline']}>
              <div className={`${styles['bg-white']} ${styles['rounded-lg']} ${styles['shadow-lg']} ${styles['p-6']}`}>
                <img
                  src="https://cdn0.iconfinder.com/data/icons/tiny-icons-1/100/tiny-03-512.png"
                  alt="Photo"
                  className="w-full h-48 object-cover mb-4 rounded-lg"
                />
                <h2 className={`${styles['text-2xl']} ${styles['font-bold']} ${styles['text-norsk']} ${styles['mb-2']}`}>Books</h2>
                {/* <p className={styles['text-norsk']}>
                  Do you have a book you want to buy? 
                </p> */}
              </div>
            </a>
            <a href="https://www.google.com" className={styles['no-underline']}>
              <div className={`${styles['bg-white']} ${styles['rounded-lg']} ${styles['shadow-lg']} ${styles['p-6']}`}>
              <img
                  src="https://cdn0.iconfinder.com/data/icons/tiny-icons-1/100/tiny-03-512.png"
                  alt="Photo"
                  className="w-full h-48 object-cover mb-4 rounded-lg"
                />
                <h2 className={`${styles['text-2xl']} ${styles['font-bold']} ${styles['text-norsk']} ${styles['mb-2']}`}>Reserve</h2>
                {/* <p className={styles['text-norsk']}>
                  book you want to reserve or see a list of your reserved books? 
                </p> */}
              </div>
            </a>
            <a href="/" className={styles['no-underline']}>
              <div className={`${styles['bg-white']} ${styles['rounded-lg']} ${styles['shadow-lg']} ${styles['p-6']}`}>
                {/* <img
                  src="https://example.com/your-image-1.png"
                  alt="Photo"
                  className="w-full h-48 object-cover mb-4 rounded-lg"
                /> */}
                <h2 className={`${styles['text-2xl']} ${styles['font-bold']} ${styles['text-norsk']} ${styles['mb-2']}`}>About</h2>
                {/* <p className={styles['text-norsk']}>
                most frequent questions
                </p> */}
              </div>
            </a>
            <a href="/" className={styles['no-underline']}>
              <div className={`${styles['bg-white']} ${styles['rounded-lg']} ${styles['shadow-lg']} ${styles['p-6']}`}>
                {/* <img
                  src=""
                  alt="Photo"
                  className="w-full h-48 object-cover mb-4 rounded-lg"
                /> */}
                <h2 className={`${styles['text-2xl']} ${styles['font-bold']} ${styles['text-norsk']} ${styles['mb-2']}`}>Help</h2>
                {/* <p className={styles['text-norsk']}>
                  Need help? Contact us!
                </p> */}
              </div>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default FrontPage;
