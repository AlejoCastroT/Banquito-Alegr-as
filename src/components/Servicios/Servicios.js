import React from "react";
import styles from './Servicios.module.css';

function Servicios() {
    return (
        <section id="servicios" className={styles.container__trust}>
                            <div className={styles.text__trust}>
                    <p>no c titulo ramdom para saber que aca va</p>
                    <h1>Lorem ipsum yo no se que xd.</h1>
                </div>
            <div className={styles.trust}>
                <div className={styles.container__box_cardPrimary}>
                    <div className={styles.card__trust}>
                        <h2>Lorem ipsum</h2>
                        <p>Pore et dolore magna aliqua. Ut enim ad minim veniam, quis nos trud exercitation</p>
                    </div>
                    <div className={styles.card__trust}>
                        <h2>Lorem ipsum</h2>
                        <p>Pore et dolore magna aliqua. Ut enim ad minim veniam, quis nos trud exercitation Pore et dolore magna aliqua. Ut enim ad minim veniam, quis nos trud exercitation Pore et dolore magna aliqua. Ut enim ad minim veniam, quis nos trud exercitation Pore et dolore magna aliqua. Ut enim ad minim veniam, quis nos trud exercitation</p>
                    </div>
                    <div className={styles.card__trust}>
                        <h2>Lorem ipsum</h2>
                        <p>Pore et dolore magna aliqua. Ut enim ad minim veniam, quis nos trud exercitation</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Servicios;
