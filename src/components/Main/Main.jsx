import React from 'react';
import styles from './Main.module.css';
import HeaderMain from '../HeaderMain/HeaderMain';
import MainContent from '../MainContent/MainContent';
import FooterMain from '../FooterMain/FooterMain';

function Main() {
    return (
        <main className={styles.custMain}>
            <HeaderMain  />
            <MainContent />
            <FooterMain />
        </main>
    );
}

export default Main;