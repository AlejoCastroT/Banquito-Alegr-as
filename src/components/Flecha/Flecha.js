import React, { useState, useEffect } from "react";
import styles from './Flecha.module.css';
import { FaArrowUp } from 'react-icons/fa'; 

function Flecha() {
    const [isVisible, setIsVisible] = useState(false);

    const checkScrollTop = () => {
        if (window.scrollY > 200) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        window.addEventListener('scroll', checkScrollTop);
        return () => {
            window.removeEventListener('scroll', checkScrollTop);
        };
    }, []); // Eliminar isVisible de las dependencias

    return (
        <div className={styles.flecha} onClick={scrollTop} style={{ display: isVisible ? 'flex' : 'none' }}>
            <FaArrowUp />
        </div>
    );
}

export default Flecha;
