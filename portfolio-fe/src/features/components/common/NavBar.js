import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectPage } from '../../state/common/navBarSlice';
import logo from '../../assets/logo.svg';
import './common.css';

const NavBar = () => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state.nav)

    const handleSelection = (payload) => {
        dispatch(selectPage(payload))
    }

    return (
        <>
            <div className='nav'>
                <Link onClick={() => {handleSelection(1)}} to={'/'} className={`logo-container`}>
                    <img
                      className='main-logo'
                      src={logo}
                      alt='Esmodea Burk'
                      width={'288px'}
                      height={'180px'}
                    />
                </Link>
                <div className='link-container'>
                    <Link className={`nav-link ${state.selectedPage === '/about' ? ' selected' : ''}`} onClick={() => {handleSelection(1)}} to={'/about'}> About </Link>
                    <Link className={`nav-link ${state.selectedPage === '/abilities' ? ' selected' : ''}`} onClick={() => {handleSelection(2)}} to={'/abilities'}> What I can do </Link>
                    <Link className={`nav-link ${state.selectedPage === '/resume' ? ' selected' : ''}`} onClick={() => {handleSelection(3)}} to={'/resume'}> My Resume </Link>
                    <Link className={`nav-link ${state.selectedPage === '/github' ? ' selected' : ''}`} onClick={() => {handleSelection(4)}} to={'/github'}> My Github </Link>
                    <Link className={`nav-link ${state.selectedPage === '/tools' ? ' selected' : ''}`} onClick={() => {handleSelection(5)}} to={'/tools'}> The tools I use </Link>
                </div>
            </div>
        </>
    )
}

export default NavBar;