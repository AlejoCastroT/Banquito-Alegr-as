import React from "react";
import styles from './Ayudar.module.css';
import img from '../../assets/img/carita-pensando.png';

function Ayudar() {
    return (
        <div className={`${styles.container__cover} ${styles.div__offset}`} id="container_all">
            <div className={styles.cover}>
            <section className={styles.image__cover}>
                    <img src={img} alt="Carita pensando" />
                </section>
                <section className={styles.text__cover} id="inicio">
                    <h1 className={styles.nutri}>¿Cómo puedes ayudar?</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </section>
            </div>
        </div>
    );
}

export default Ayudar;
