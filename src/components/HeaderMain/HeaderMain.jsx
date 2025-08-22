import React from 'react';
import styles from './HeaderMain.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function HeaderMain() {
    return (
        <section className={styles.headerMain}>
            <h1 className={styles.text}>
                Прості кроки до відкриття рахунку
            </h1>
            <ol className={styles.olCust}>
                <li>
                    <FontAwesomeIcon icon="fa-solid fa-1" />
                    Заявка на консультацію - залиште свої контакти
                </li>
                <li>
                    <FontAwesomeIcon icon="fa-solid fa-2" />
                    Підбір оптимального типу рахунку під ваші цілі
                </li>
                <li>
                    <FontAwesomeIcon icon="fa-solid fa-3" />
                    Підготовка документів та їх подача через нашу підтримку
                </li>
                <li>
                    <FontAwesomeIcon icon="fa-solid fa-4" />
                    Підтвердження та активація рахунку
                </li>
                <li>
                    <FontAwesomeIcon icon="fa-solid fa-5" />
                    Навчання роботі з платформою та супроввід на старті
                </li>
            </ol>
        </section>
    );
}

export default HeaderMain;