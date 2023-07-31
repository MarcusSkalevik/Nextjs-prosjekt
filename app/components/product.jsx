import React from 'react';
import Link from 'next/link';
import styles from '../books.module.css'; // Import the CSS module
import NavBar from '../components/navbar';
import listedBooks from '../components/bookdata';
import SiteFooter from '../components/siteFooter';



const Product = ({ productId }) => {
const book = listedBooks.find((p) => p.id == productId);
if (!book) return <div>Unknown book</div>

return (
    <div>
        <h2>{book.title}</h2>
        <h4>Author: {book.author}</h4>
    </div>  
);
};

export default Product;
