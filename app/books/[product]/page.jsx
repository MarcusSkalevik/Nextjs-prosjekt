import React from 'react';
import Link from 'next/link';
import styles from '../../books.module.css'; 
import NavBar from '../../components/navbar';
import listedBooks from '../../components/bookdata';
import SiteFooter from '../../components/siteFooter';
import Product from '../../components/product';


const Page = ({ params }) => {
return (
    <div>
    <Product productId={params.product} />
    </div>
);
};

module.exports = Page;
