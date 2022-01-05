import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';

import '../style/main.css';

import ResFinal from './ResFinal';

import Sexo from './sexo';

import Idade from './Idade';
import Altura from './Altura';
import Peso from './Peso';
import Button from './button';

function Main(props) {

    const [errorAlt, setErrorAlt] = useState(false);
    const [errorPeso, setErrorPeso] = useState(false);
    const [errorIda, setErrorIda] = useState(false);

    const [colorAlt, setColorAlt] = useState('#032b43');
    const [colorPeso, setColorPeso] = useState('#032b43');
    const [colorIda, setColorIda] = useState('#032b43');

    const [text, setText] = useState('');


    function erro(altura, peso, idade) {

        setErrorAlt(altura <= 0 || altura > 250 ? true : false);
        setErrorPeso(peso <= 0 ? true : false);
        setErrorIda(idade <= 0 ? true : false);
    }

    function calc(altura, peso) {

        let formatAlt = '';
        let resImc = null;

        if (altura.length > 2) {

            for (let i = 0; i < altura.length; i++) {

                if (i == 1 && altura[i] != '.') {
                    formatAlt += '.'
                }

                formatAlt += altura[i];
            }

            altura = formatAlt;

            resImc = peso / (altura * altura);
            resImc = resImc.toFixed(2)

        }

        else {
            resImc = peso / (altura * altura);
            resImc = resImc * 10000;
            resImc = resImc.toFixed(2);
        }

        props.addRes(resImc);
        setText('kg/m2');
    }

    useEffect(() => {
        setColorAlt(errorAlt ? '#fc0808' : '#032b43');
        setColorPeso(errorPeso ? '#fc0808' : '#032b43');
        setColorIda(errorIda ? '#fc0808' : '#032b43');
    }, [errorAlt, errorPeso, errorIda])


    return (
        <main>
            <div className='center'>
                <div className='box'>
                    <div className='painel'><h1>{props.result} {text}</h1></div>

                    <ResFinal idade={props.idade} result={props.result} />

                    <Sexo />

                    <Idade add={props.add} errorIda={errorIda} colorIda={colorIda} />

                    <Altura add={props.add} errorAlt={errorAlt} colorAlt={colorAlt} />

                    <Peso add={props.add} errorPeso={errorPeso} colorPeso={colorPeso} />

                    <Button idade={props.idade} altura={props.altura} peso={props.peso} erro={erro} calc={calc} />

                </div>
            </div>
        </main>
    )
}

export default Main;