import React from "react";
import styles from './Footer.module.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <h1>Banquito</h1>
                </div>
                <div className={styles.socialIcons}>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebook className={styles.icon} />
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                        <FaTwitter className={styles.icon} />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className={styles.icon} />
                    </a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className={styles.icon} />
                    </a>
                </div>
                <div className={styles.links}>
                    <a href="#sobre">Sobre Nosotros</a>
                    <a href="#contacto">Contacto</a>
                    <a href="/privacy">Política de Privacidad</a>
                    <a href="/terms">Términos de Servicio</a>
                </div>
                <div className={styles.copyright}>
                    <p>&copy; 2024 Banquito. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
