import React from 'react';
import styles from './Dona.module.css'; // Importa el archivo CSS Module

function DonaTuAlegria() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Dona tu alegría</h1>
            <p className={styles.description}>Aquí puedes donar tu alegría...</p>
        </div>
    );
}

export default DonaTuAlegria;
