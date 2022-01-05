import React from 'react';

import Logo from '../img/img-logo.svg';

import '../style/header.css';

function Header() {
    return (
        <header>
            <div className='center'>
                <img src={Logo} alt="logo" />
                <div className='logo'>
                    <h2>Cálculo IMC</h2>
                </div>
            </div>
        </header>
    )
}

export default Header;