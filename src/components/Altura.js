import React from 'react';

import '../style/error.css';

function Altura(props) {

    function change(e) {
        let event = e.target.value;
        let eveTarget = e.target.id;
        props.add(event, eveTarget);

    }

    return (
        <section>
            <h3>Digite a sua altura:</h3>
            <div className='flex'>
                <div className='input'>
                    <input type="number" placeholder='Ex: 1,85' onChange={change} id='alt' style={{ border: '1px solid ' + props.colorAlt }} />

                </div>
                <div className='text'>cm</div>
            </div>

            <div className={props.errorAlt ? 'errorAlt' : 'errorNoneAlt'}>* A altura não pode ficar zerada, só é aceita alturas menores que 2 metros e meio e só é aceito números!</div>

        </section>
    )
}

export default Altura;