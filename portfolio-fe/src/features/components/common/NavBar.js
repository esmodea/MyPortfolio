import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg'

const NavBar = () => {
    return (
        <>
            <div className='Nav'>
                <div className='logo-container'>
                    <img
                      className='main-logo'
                      src={logo}
                      alt='Esmodea Burk' 
                      width={'288px'}
                      height={'180px'}
                    />
                </div>
                <div className='link-container'>
                    <Link to={'..'}> About </Link>
                </div>
            </div>
        </>
    )
}

export default NavBar;