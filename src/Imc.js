import React, { useState } from 'react';
import './style/global.css';

import Header from './components/header';
import Main from './components/Main';
import Footer from './components/footer';

function Imc() {

    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');
    const [idade, setIdade] = useState('');

    const [result, setResult] = useState(`Resultado`);

    function add(event, id) {

        if (id === 'idade') {
            setIdade(event);
        }

        else if (id === 'alt') {
            setAltura(event);
        }

        else {
            setPeso(event);
        }

    }

    function addRes(imc) {

        setResult(imc);

    }

    return (
        <div>
            <Header />
            <Main add={add} idade={idade} altura={altura} peso={peso} result={result} addRes={addRes} />
            <Footer />
        </div>

    )
}

export default Imc;