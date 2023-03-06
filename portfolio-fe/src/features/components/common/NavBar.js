import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectPage } from '../../state/common/navBarSlice';
import { useAuth0 } from '@auth0/auth0-react';
import Explanation from '../2-AbilitiesPage/Explanation';
import { Menu } from 'antd';
import { FormOutlined, GithubOutlined, BookOutlined, SlidersOutlined } from '@ant-design/icons';
import { choosePage } from '../../state/dashboardState/dashboardSlice';
import logo from '../../assets/logo.svg';
import altlogo from '../../assets/Logo.png';
import './common.css';

const NavBar = () => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state.nav)
    const [menuState, setMenuState] = useState(true);
    const { isAuthenticated } = useAuth0();

    const handleSelection = (payload) => {
        dispatch(selectPage(payload))
    }

    const toggleMenu = () => {
        setMenuState(!menuState);
    }

    const handleMenuSelection = (e) => {
        dispatch(choosePage(e.key));
    }

    const menuItems = [
        {
            label: 'Resume',
            key: 'resume-form',
            icon: <BookOutlined />,
        },
        {
            label: 'Github',
            key: 'github-form',
            icon: <GithubOutlined />,
        },
        {
            label: 'Tools',
            key: 'tools-form',
            icon: <SlidersOutlined />,
        },
        {
            label: 'Personal',
            key: 'info-form',
            icon: <FormOutlined />,
        },
    ]

    return (
        <>
            <div className='nav'>
                <Link onClick={() => {handleSelection(1)}} to={'/'} className={`logo-container`}>
                    <object
                      className='main-logo'
                      data={logo ? logo : altlogo}
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
            {state.selectedPage === '/abilities' && isAuthenticated ? <Explanation menu={toggleMenu} /> : ''}
            {state.selectedPage === '/abilities' && isAuthenticated ? <Menu onClick={handleMenuSelection} defaultSelectedKeys={'info-form'} className='abilities-menu' inlineCollapsed={menuState} items={menuItems} /> : ''}
        </>
    )
}

export default NavBar;