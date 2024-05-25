import React, { useEffect } from "react";
import styles from './Nav.module.css';
import logo from '../../assets/img/logo.png';

function Nav() {
    useEffect(() => {
        const header = document.getElementById("header");
        const handleScroll = () => {
            if (window.scrollY > 0) {
                header.classList.add(styles.scrolled);
            } else {
                header.classList.remove(styles.scrolled);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div>
            <header id="header" className={styles.header}>
                <div className={styles.container__header}>
                    <div className={styles.logo}>
                        <h2>Banquito de Alegrias</h2>
                        <img src={logo} alt="Logo" className={styles.logo__image} />
                    </div>
                    <div className={styles.container__nav}>
                        <nav id="nav">
                            <ul>
                                <li><a href="#inicio" className={styles.a}>Inicio</a></li>
                                <li><a href="#servicios" className={styles.a}>Servicios</a></li>
                                <li><a href="#sobre" className={styles.a}>Sobre</a></li>
                                <li><a href="#contacto" className={styles.a}>Contacto</a></li>
                                <li><a href="#dona" className={styles.select}>Dona tu alegría</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Nav;
