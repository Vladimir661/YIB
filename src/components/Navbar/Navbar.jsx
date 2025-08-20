import React from 'react';
import styles from './Navbar.module.css';

function Navbar() {
    return (
        <nav className={styles.navCust}>
            <div className={styles.navContent}>
                <div className={styles.logo}>
                    <picture>
                        <img src="" alt="" />
                    </picture>
                </div>
                <div className={styles.navLink}>

                </div>
            </div>
        </nav>
    );
}

export default Navbar;