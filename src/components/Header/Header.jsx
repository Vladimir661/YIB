import React from 'react';
import Navbar from '../NavBar/NavBar';
import styles from './Header.module.css';

function Header() {
    return (
        <header className={styles.headerCust}>
            <Navbar />
        </header>
    );
}

export default Header;