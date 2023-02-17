import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectPage } from '../../state/common/navBarSlice';
import logo from '../../assets/logo.svg'

const NavBar = () => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state.nav)

    const handleSelection = (payload) => {
        dispatch(selectPage(payload))
    }

    return (
        <>
            <div className='nav'>
                <Link onClick={() => {handleSelection(0)}} to={'/'} className={`logo-container ${state.selectedPage === 0 ? ' selected' : ''}`}>
                    <img
                      className='main-logo'
                      src={logo}
                      alt='Esmodea Burk'
                      width={'288px'}
                      height={'180px'}
                    />
                </Link>
                <div className='link-container'>
                    <Link className={`nav-link ${state.selectedPage === 1 ? ' selected' : ''}`} onClick={() => {handleSelection(1)}} to={'/portfolio'}> About </Link>
                    <Link className={`nav-link ${state.selectedPage === 2 ? ' selected' : ''}`} onClick={() => {handleSelection(2)}} to={'/portfolio'}> What I can do </Link>
                    <Link className={`nav-link ${state.selectedPage === 3 ? ' selected' : ''}`} onClick={() => {handleSelection(3)}} to={'/portfolio'}> My Resume </Link>
                    <Link className={`nav-link ${state.selectedPage === 4 ? ' selected' : ''}`} onClick={() => {handleSelection(4)}} to={'/portfolio'}> My Github </Link>
                    <Link className={`nav-link ${state.selectedPage === 5 ? ' selected' : ''}`} onClick={() => {handleSelection(5)}} to={'/portfolio'}> The tools I use </Link>
                </div>
            </div>
        </>
    )
}

export default NavBar;