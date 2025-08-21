import React from 'react';
import styles from './Navbar.module.css';

function Navbar() {
    return (
        <nav className={styles.navCust}>
            <div className={styles.navContent}>
                <div className={styles.logo}>
                    <picture>
                        <img className={styles.logoCust} src="/logo/logo.png" alt="logo" width={100} height={75}/>
                    </picture>
                </div>
                <ul  className={styles.navLink}>
                    <li><a href="/#howItsWord">Як це працює</a></li>
                    <li><a href="/#ourServants">Наші послуги</a></li>
                    <li><a href="/#whyChooseUs">Чому обирають нас</a></li>
                    <li><a href="/#reviews">Відгуки</a></li>
                    <li><a href="/#contacts">Контакти</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;