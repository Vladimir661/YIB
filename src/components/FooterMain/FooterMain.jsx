import React from 'react';
import styles from './FooterMain.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function FooterMain() {
    return (
        <section className={styles.footerMain}>
            <h1 className={styles.text}>
                Чому обирають нас?
            </h1>
            <p className={styles.preContent}>
                Ми спеціалізуємося на допомозі інвесторам з України у
                відкритті та веденні рахунків в Interactive Brokers. Завдяки
                нашому досвіду, ви зможете уникнути типових складнощів
                і швидко почати інвестувати в акції та ETF.
            </p>
            <ul className={styles.olCust}>
                <li>
                    <FontAwesomeIcon icon="fa-solid fa-thumbtack" />
                    Особистий супровід від першого дзвінка до перших угод
                </li>
                <li>
                    <FontAwesomeIcon icon="fa-solid fa-thumbtack" />
                    Актуальна інформація про процес верифікації
                </li>
                <li>
                    <FontAwesomeIcon icon="fa-solid fa-thumbtack" />
                    Підтримка українською мовою
                </li>
                <li>
                    <FontAwesomeIcon icon="fa-solid fa-thumbtack" />
                    Поради щодо оптимальної структури рахунку
                </li>
            </ul>
        </section>
    );
}

export default FooterMain;