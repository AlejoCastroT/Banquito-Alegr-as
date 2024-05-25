import React from "react";
import styles from './Sobre.module.css'; 
import img from '../../assets/img/carita-gafitas.png';

function Sobre() {
    return (
        <section id="sobre" className={styles.section__sobre}>
            <div className={styles.container__about}>
                <div className={styles.about}>
                    <div className={styles.text__about}>
                        <h1>Sobre nosotros</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    
                    <div className={styles.image__about}>
                        <img src={img} alt="Carita con gafas" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Sobre;
