import React from 'react';

function Button(props) {

    function send() {
        if (!props.altura || !props.peso || props.altura <= 0 || props.peso <= 0 || !props.idade || props.idade <= 0) {
            props.erro(props.altura, props.peso, props.idade);
        }

        else {
            props.erro(props.altura, props.peso);

            props.calc(props.altura, props.peso);
        }
    }

    return (
        <button onClick={send}>Calcular</button>
    )
}

export default Button;