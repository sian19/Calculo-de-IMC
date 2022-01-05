import React from 'react';

function Idade(props) {

    function change(e) {
        let event = e.target.value;
        let eveTarget = e.target.id;
        props.add(event, eveTarget);
    }

    return (
        <section>
            <h3>Digite sua idade:</h3>
            <div className='flex'>
                <div className='input'>
                    <input type="number" placeholder='Ex: 25' onChange={change} id='idade' style={{
                        border: '1px solid ' + props.colorIda
                    }} />
                </div>
                <div className='text'>anos</div>
            </div>
            <div className={props.errorIda ? 'errorIda' : 'errorNoneIda'}>* A idade não pode ficar zerada e so é aceito números!</div>

        </section>
    )
}

export default Idade; 