import React from 'react';
import Nav from './components/nav/nav';
import Inicio from './components/inicio/Inicio';
import Servicios from './components/Servicios/Servicios';
import Sobre from './components/Sobre/Sobre';
import Flecha from './components/Flecha/Flecha';
import Ayudar from './components/Ayudar/Ayudar';
import Contacto from './components/Contacto/Contacto';
import Footer from './components/Footer/Footer';

function App() {
    return (
        <div>
            <Nav />
            <Inicio />
            <Servicios/>
            <Sobre/>
            <Flecha/>
            <Ayudar/>
            <Contacto/>
            <Footer/>
        </div>
    );
}

export default App;
