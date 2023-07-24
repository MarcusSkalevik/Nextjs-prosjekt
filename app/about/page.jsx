import React from 'react';

// Sample book data (you can replace it with actual data)
const books = [
  {
    id: 1,
    title: 'Book 1',
    image: 'book1.jpg',
  },
  {
    id: 2,
    title: 'Book 2',
    image: 'book2.jpg',
  },
  {
    id: 3,
    title: 'Book 3',
    image: 'book3.jpg',
  },
];

const BookList = () => {
  return (
    <div style={styles.container}>
      <h2>Book List</h2>
      <ul style={styles.bookList}>
        {books.map(book => (
          <li key={book.id} style={styles.bookItem}>
            <div>
              <img src={book.image} alt={book.title} style={styles.bookImage} />
              <h3>{book.title}</h3>
              <button>Buy Now</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    minHeight: '100vh',
  },
  bookList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  bookItem: {
    marginBottom: '20px',
  },
  bookImage: {
    width: '200px', // Adjust this based on your image size preference
    height: '300px', // Adjust this based on your image size preference
    objectFit: 'cover',
    borderRadius: '8px',
  },
};

export default BookList;
