import React from 'react';
import Link from 'next/link';
import NavBar from '../components/navbar';
import listedBooks from '../components/bookdata';
import SiteFooter from '../components/siteFooter';
import Product from '../components/product';
import styles from '../help.module.css';

const About = () => {
    return (
        <main className={styles['bg-image']}>
    <div className={styles['bg-gradient-to-br']}>
        <h1 className={styles.mainTitle}>Help</h1>
    </div>
    </main>
    );
};

export default About;
