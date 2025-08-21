import React from 'react';
import styles from './HeaderContent.module.css';

function HeaderContent() {
    return (
        <section className={styles.content}>
            <h1>
                Відкрити інвестаційний рахунок в <i>Interactive Brokers</i> просто та швидко
            </h1>
            <p className={styles.preFirst}>
                Професійна допомога в реєстрації,
                налаштуванні та супроводі інвестиційних
                рахунків</p>
                <div className={styles.lastContent}>
                    <p className={styles.preSecond}>
                Ми допоможемо вам легко розлочати інвестувати
                на міжнародних ринках через одного з найбільших
                брокерів світу — <i>Interactive Brokers.</i> Консультації,
                відкриття рахунку та підтримка на кожному етапі.</p>
                    <a href="https://dwelloq.netlify.app" target="_blank" className={styles.custButton}>Відкрити рахунок зараз</a>
                </div>
        </section>
    );
}

export default HeaderContent;