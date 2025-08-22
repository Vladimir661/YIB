import React from 'react';
import styles from './MainContent.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function MainContent() {
    return (
        <section className={styles.mainContent}>
            <h1 className={styles.text}>
                Наші послуги
            </h1>
            <ul className={styles.olCust}>
                <li>
                    <FontAwesomeIcon icon="fa-solid fa-check" />
                    Консультація з в вибору типу рахунку в Interactive Brokers
                </li>
                <li>
                    <FontAwesomeIcon icon="fa-solid fa-check" />
                    Допомога у підготовці та подачі документів
                </li>
                <li>
                    <FontAwesomeIcon icon="fa-solid fa-check" />
                    Реєстрація та відкриття рахунку від імені клієнта
                </li>
                <li>
                    <FontAwesomeIcon icon="fa-solid fa-check" />
                    Пояснення комісій, валютних операцій і податків
                </li>
                <li>
                    <FontAwesomeIcon icon="fa-solid fa-check" />
                    Підтримка в процесі використання рахунку
                </li>
            </ul>
        </section>
    );
}

export default MainContent;