import React, { useState } from 'react';
import Nav from './components/nav/nav';
import DonaTuAlegria from './components/Dona/Dona';
import Inicio from './components/inicio/Inicio';
import Servicios from './components/Servicios/Servicios';
import Sobre from './components/Sobre/Sobre';
import Contacto from './components/Contacto/Contacto';
import Footer from './components/Footer/Footer'
import Ayudar from './components/Ayudar/Ayudar'
import Flecha from './components/Flecha/Flecha'


function App() {
    const [view, setView] = useState(null); // Estado inicial: null

    const renderView = () => {
        switch (view) {
            case 'dona':
                return <DonaTuAlegria />;
            default:
                return (
                    <div>
                        <Inicio />
                        <Servicios />
                        <Sobre />
                        <Ayudar/>
                        <Contacto />
                        <Footer/>
                        <Flecha/>
                    </div>
                );
        }
    };

    return (
        <div>
            <Nav setView={setView} />
            {renderView()}
        </div>
    );
}

export default App;
