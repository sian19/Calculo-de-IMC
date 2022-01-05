import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';

import '../style/sexo.css'

function Sexo() {

    const [borderM, setBorderM] = useState('2px solid #3ea356');
    const [borderH, setBorderH] = useState('1px solid #032b43');

    const [select, setSelect] = useState(false);

    function changeColor() {
        setSelect(select => !select);
    }

    useEffect(() => {

        setBorderM(!select ? '2px solid #3ea356' : '1px solid #032b43');
        setBorderH(select ? '2px solid #3ea356' : '1px solid #032b43');

    }, [select])

    return (
        <div className='sexo'>
            <div className='text-sex'>
                <h3>Sexo:</h3>
            </div>
            <div className='flex-sexo'>
                <div className='box-m' onClick={changeColor} style={{ border: borderM }}>Mulher</div>
                <span></span>
                <div className='box-h' onClick={changeColor} style={{
                    border: borderH
                }}>Homem</div>
            </div>
        </div>
    )
}

export default Sexo;