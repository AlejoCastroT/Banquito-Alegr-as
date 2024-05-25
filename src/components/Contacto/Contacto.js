import React, { useState } from "react";
import styles from './Contacto.module.css';
import { FaEnvelope, FaWhatsapp } from 'react-icons/fa';

function Contacto() {
    const [asunto, setAsunto] = useState("");
    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [mensaje, setMensaje] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // la lógica para enviar el mensaje
        console.log("Mensaje enviado:", { asunto, nombre, correo, mensaje });
        // Limpia los campos después de enviar el mensaje
        setAsunto("");
        setNombre("");
        setCorreo("");
        setMensaje("");
    };

    return (
        <div className={styles.container} id="contacto">
            <div className={styles.container_imputs}>
                <h2 className={styles.h2}>Contacto</h2>
                <div className={styles.container_flex}>
                <div className={styles.flexContainer}>
                    <div className={styles.contactCard}>
                    <div className={styles.contactIcon}><FaEnvelope/></div>
                    <div className={styles.contactInfo}>
                            <h3>Gmail</h3>
                            <p>Correo: correo@gmail.com</p>
                        </div>
                    </div>
                    <div className={styles.contactCard}>
                        <div className={styles.contactIcon}><FaWhatsapp /></div>
                        <div className={styles.contactInfo}>
                            <h3>WhatsApp</h3>
                            <p>Número: +123456789</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.formGroup}>
                        <label htmlFor="nombre" className={styles.label}>Nombre</label>
                        <input
                            type="text"
                            id="nombre"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                            placeholder="Escribe tu nombre"
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="correo" className={styles.label}>Correo</label>
                        <input
                            type="email"
                            id="correo"
                            value={correo}
                            onChange={(e) => setCorreo(e.target.value)}
                            placeholder="Escribe tu correo"
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="mensaje" className={styles.label}>Mensaje</label>
                        <textarea
                            id="mensaje"
                            value={mensaje}
                            onChange={(e) => setMensaje(e.target.value)}
                            placeholder="Escribe tu mensaje"
                        ></textarea>
                    </div>
                    <div className={styles.buttonContainer}>
                        <button type="submit">Enviar</button>
                    </div>
                </form>
            </div>
        </div>
        </div>
    );
}

export default Contacto;
