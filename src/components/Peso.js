import React from 'react';

function Peso(props) {

    function change(e) {
        let event = e.target.value;
        let eveTarget = e.target.id;
        props.add(event, eveTarget);
    }

    return (
        <section>
            <h3>Digite seu peso:</h3>
            <div className='flex'>
                <div className='input'>
                    <input type="number" placeholder='Ex: 70,2' onChange={change} id='peso' style={{
                        border: '1px solid ' + props.colorPeso
                    }} />

                </div>
                <div className='text'>kg</div>
            </div>

            <div className={props.errorPeso ? 'errorPeso' : 'errorNonePeso'}>* O peso não pode ficar zerado é so é aceito números!</div>

        </section>
    )
}

export default Peso;