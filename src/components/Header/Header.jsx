import React from 'react';
import styles from './Header.module.css';
import Navbar from '../Navbar/Navbar';
import HeaderContent from '../HeaderContent/HeaderContent';


function Header() {
    return (
        <header className={styles.headerCust}>
            <Navbar />
            <HeaderContent />
        </header>
    );
}

export default Header;