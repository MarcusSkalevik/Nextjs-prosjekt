import React from 'react';
import Link from 'next/link';
import styles from '../books.module.css'; // Import the CSS module

// Sample book data (you can replace it with actual data)
const books = [
  {
    id: 1,
    title: 'Book 1',
    image: '/book1.jpg', // Use the correct file name and extension
    link: 'https://www.google.com/',
  },
  {
    id: 2,
    title: 'Book 2',
    image: '/book2.jpg', // Use the correct file name and extension
    link: 'https://www.google.com/',
  },
  {
    id: 3,
    title: 'Book 3',
    image: '/book1.jpg', // Use the correct file name and extension
    link: 'https://www.google.com/',
  },
];

const BookList = () => {
  return (
    <div className={styles.container}>
      <a href="../"><button>Home</button></a>
      <h2>Book List</h2>
      <div className={styles.bookList}>
        {books.map(book => (
          <div key={book.id} className={styles.bookItem}>
            {/* Use the correct file path to the images */}
            <img src={book.image} alt={book.title} className={styles.bookImage} />
            <h3>{book.title}</h3>
            <Link href={book.link}>
              <button>Buy Now</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;
