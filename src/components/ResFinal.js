import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';

import '../style/ResFinal.css';

function ResFinal(props) {

    const [imc, setImc] = useState('');

    const [imcColor, setImcColor] = useState('black')

    useEffect(() => {

        if (props.idade > 15) {

            if (props.result < 18.5) {
                setImc('Você está abaixo do peso');
                setImcColor('yellow');
            }

            else if (props.result >= 18.5 && props.result <= 25) {
                setImc('Você está com o peso normal');
                setImcColor('green');
            }

            else if (props.result >= 25) {
                setImc('Você está acima do peso');
                setImcColor('red');

            }
        }

        else if (props.idade == 6) {

            if (props.result < 14.5) {
                setImc('Você está abaixo do peso');
                setImcColor('yellow');
            }

            else if (props.result >= 14.5 && props.result <= 16.6) {
                setImc('Você está com o peso normal');
                setImcColor('green');
            }

            else if (props.result > 16.6) {
                setImc('Você está acima do peso');
                setImcColor('red');
            }

        }

        else if (props.idade == 7) {
            if (props.result < 15) {
                setImc('Você está abaixo do peso');
                setImcColor('yellow');
            }

            else if (props.result >= 15 && props.result <= 17.3) {
                setImc('Você está com o peso normal');
                setImcColor('green');
            }

            else if (props.result > 17.3) {
                setImc('Você está acima do peso');
                setImcColor('red');
            }
        }

        else if (props.idade == 8) {
            if (props.result < 15.6) {
                setImc('Você está abaixo do peso');
                setImcColor('yellow');
            }

            else if (props.result >= 15.6 && props.result <= 16.7) {
                setImc('Você está com o peso normal');
                setImcColor('green');
            }

            else if (props.result > 16.7) {
                setImc('Você está acima do peso');
                setImcColor('red');
            }
        }

        else if (props.idade == 9) {
            if (props.result < 16.1) {
                setImc('Você está abaixo do peso');
                setImcColor('yellow');
            }

            else if (props.result >= 16.1 && props.result <= 18.8) {
                setImc('Você está com o peso normal');
                setImcColor('green');
            }

            else if (props.result > 18.8) {
                setImc('Você está acima do peso');
                setImcColor('red');
            }
        }

        else if (props.idade == 10) {
            if (props.result < 16.7) {
                setImc('Você está abaixo do peso');
                setImcColor('yellow');
            }

            else if (props.result >= 16.7 && props.result <= 19.6) {
                setImc('Você está com o peso normal');
                setImcColor('green');
            }

            else if (props.result > 19.6) {
                setImc('Você está acima do peso');
                setImcColor('red');
            }
        }

        else if (props.idade == 11) {
            if (props.result < 17.2) {
                setImc('Você está abaixo do peso');
                setImcColor('yellow');
            }

            else if (props.result >= 17.2 && props.result <= 20.3) {
                setImc('Você está com o peso normal');
                setImcColor('green');
            }

            else if (props.result > 20.3) {
                setImc('Você está acima do peso');
                setImcColor('red');
            }
        }

        else if (props.idade == 12) {
            if (props.result < 17.8) {
                setImc('Você está abaixo do peso');
                setImcColor('yellow');
            }

            else if (props.result >= 17.8 && props.result <= 21.1) {
                setImc('Você está com o peso normal');
                setImcColor('green');
            }

            else if (props.result > 21.1) {
                setImc('Você está acima do peso');
                setImcColor('red');
            }
        }

        else if (props.idade == 13) {
            if (props.result < 18.5) {
                setImc('Você está abaixo do peso');
                setImcColor('yellow');
            }

            else if (props.result >= 18.5 && props.result <= 21.9) {
                setImc('Você está com o peso normal');
                setImcColor('green');
            }

            else if (props.result > 21.9) {
                setImc('Você está acima do peso');
                setImcColor('red');
            }
        }

        else if (props.idade == 14) {
            if (props.result < 19.2) {
                setImc('Você está abaixo do peso');
                setImcColor('yellow');
            }

            else if (props.result >= 19.2 && props.result <= 22.7) {
                setImc('Você está com o peso normal');
                setImcColor('green');
            }

            else if (props.result > 22.7) {
                setImc('Você está acima do peso');
                setImcColor('red');
            }
        }

        else if (props.idade == 15) {
            if (props.result < 19.9) {
                setImc('Você está abaixo do peso');
                setImcColor('yellow');
            }

            else if (props.result >= 19.9 && props.result <= 23.6) {
                setImc('Você está com o peso normal');
                setImcColor('green');
            }

            else if (props.result > 23.6) {
                setImc('Você está acima do peso');
                setImcColor('red');
            }
        }

        else if (props.idade >= 1 && props.idade < 6) {
            if (props.result < 14.81) {
                setImc('Você está abaixo do peso');
                setImcColor('yellow');
            }

            else if (props.result >= 14.81 && props.result <= 17.28) {
                setImc('Você está com o peso normal');
                setImcColor('green');
            }

            else if (props.result > 17.28) {
                setImc('Você está acima do peso');
                setImcColor('red');
            }
        }


    }, [props.result, props.idade])

    return (
        <div className='ResFinal' style={{
            color: imcColor
        }}>
            {imc}
        </div>
    );
}

export default ResFinal;