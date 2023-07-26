import React from 'react';
import Link from 'next/link';
import styles from '../books.module.css'; // Import the CSS module
import NavBar from '../components/navbar';
import listedBooks from '../components/bookdata';
import SiteFooter from '../components/siteFooter';



const BookList = () => {
  return (
    <div className={styles.container}>
      <a href="../"><img className={styles.homeButton} src='https://seeklogo.com/images/B/book-store-logo-AA64B3CB13-seeklogo.com.png'></img></a>
      <NavBar />
      <h2 className={styles.bookTitle}>All books!</h2>
      <div className={styles.bookList}>
        {listedBooks.map(book => (
          <div key={book.id} className={styles.bookItem}>
            <div className={styles.bookContentWrapper}>
              {/* Use the correct file path to the images */}
              <img src={book.image} alt={book.title} className={styles.bookImage} />
              <h3>{book.title}</h3>
              <h4>{book.author}</h4>
              <Link href={book.link}>
                <button className={styles.button}>{book.price},-</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <SiteFooter />
    </div>
    
  );
};

export default BookList;
