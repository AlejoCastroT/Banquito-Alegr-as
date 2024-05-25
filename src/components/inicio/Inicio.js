import React from "react";
import styles from './Inicio.module.css';
import img1 from '../../assets/img/carita-corazon.png';
import img2 from '../../assets/img/carita-estrella.png';

function Inicio() {
    return (
        <main className={styles.container} id="inicio">
            <h3 className={styles.titulo}>
                Ayuda a que mas niños se contagien de alegría
            </h3>
            <div className={styles.imagen1Container} style={{ position: 'relative', top: '0px', left: '-500px' }}>
                <img src={img1} alt="Logo" className={styles.image1} style={{ position: 'absolute', top: '0', left: '0' }} />
            </div>
            <div className={styles.imagen2Container} style={{ position: 'relative', top: '10px', right: '1400px' }}>
                <img src={img2} alt="Logo" className={styles.image2} style={{ position: 'absolute', top: '0', right: '0' }} />
            </div>
        </main>
    );
}

export default Inicio;
