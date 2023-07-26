import React from 'react';
import styles from '../footer.module.css'; 

const SiteFooter = () => {
return (
    <footer className={styles.footer}>
    <h2 className={styles.companyName}>Best Bookstore in the World</h2>
    <p className={styles.companyInfo}>
        Address: 123 Book Street, Stord, Norway
        <br />
        Phone: +47 876 65 765
        <br />
        Email: info@bestbookstore.com
    </p>
    </footer>
);
};

export default SiteFooter;
