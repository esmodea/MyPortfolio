import React, { useEffect, useReducer, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectPage } from '../../state/common/navBarSlice';
import { useAuth0 } from '@auth0/auth0-react';
import Explanation from '../2-AbilitiesPage/Explanation';
import { Menu } from 'antd';
import { FormOutlined, GithubFilled, InfoCircleOutlined, FileProtectOutlined, ToolOutlined, CodeOutlined } from '@ant-design/icons';
import { choosePage } from '../../state/dashboardState/dashboardSlice';
import logo from '../../assets/logo.svg';
import altlogo from '../../assets/Logo.png';
import logoCropped from '../../assets/Logo-cropped.png'
import './common.css';

const NavBar = () => {
    const [displayMainLogo, setDisplayMain] = useState({animationName: 'stay', animationIterationCount: 'infinite', animationDuration: '2s'});
    const [displayMobileLogo, setDisplayMobile] = useState({animationName: 'stay', animationIterationCount: 'infinite', animationDuration: '2s'});
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

    useEffect(() => {
        window.onresize = () => {
            if(window.innerWidth < 1525) {
                setDisplayMain({animationName: 'disappear', animationIterationCount: 1, animationDuration: '99999999999999999999999999s'})
                setDisplayMobile({animationName: 'stay', animationIterationCount: 'infinite', animationDuration: '2s'})
            }
            if(window.innerWidth >= 1525) {
                setDisplayMobile({animationName: 'disappear', animationIterationCount: 1, animationDuration: '99999999999999999999999999s'})
                setDisplayMain({animationName: 'stay', animationIterationCount: 'infinite', animationDuration: '2s'})
            }
        }
    }, [])

    const menuItems = [
        {
            label: 'About the site',
            key: 'info-dump',
            icon: <InfoCircleOutlined />,
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
                      id='main-logo'
                      className={`main-logo`}
                      data={logo ? logo : altlogo}
                      alt='Esmodea Burk'
                      width={'350px'}
                      height={'298px'}
                      style={displayMainLogo}
                    />
                    <object
                      id='mobile-logo'
                      className={`main-logo`}
                      data={logoCropped}
                      alt='Esmodea Burk'
                      width={'95px'}
                      height={'64px'}
                      style={displayMobileLogo}
                    />
                </Link>
                <div className='link-container'>
                    <Link className={`nav-link ${state.selectedPage === '/about' ? ' selected' : ''}`} onClick={() => {handleSelection(1)}} to={'/about'}> <InfoCircleOutlined /> {window.innerWidth > 750 ? 'About' : ''} </Link>
                    <Link className={`nav-link ${state.selectedPage === '/abilities' ? ' selected' : ''}`} onClick={() => {handleSelection(2)}} to={'/abilities'}> <CodeOutlined /> {window.innerWidth > 750 ? 'What I can do' : ''} </Link>
                    <Link className={`nav-link ${state.selectedPage === '/resume' ? ' selected' : ''}`} onClick={() => {handleSelection(3)}} to={'/resume'}> <FileProtectOutlined /> {window.innerWidth > 750 ? 'My Resume' : ''} </Link>
                    <Link className={`nav-link ${state.selectedPage === '/github' ? ' selected' : ''}`} onClick={() => {handleSelection(4)}} to={'/github'}> <GithubFilled /> {window.innerWidth > 750 ? 'My Github' : ''} </Link>
                    <Link className={`nav-link ${state.selectedPage === '/tools' ? ' selected' : ''}`} onClick={() => {handleSelection(5)}} to={'/tools'}> <ToolOutlined /> {window.innerWidth > 750 ? 'My Tools' : ''} </Link>
                </div>
            </div>
            {state.selectedPage === '/abilities' && isAuthenticated ? <Explanation menu={toggleMenu} /> : ''}
            {state.selectedPage === '/abilities' && isAuthenticated ? <Menu onClick={handleMenuSelection} defaultSelectedKeys={'info-form'} className='abilities-menu' inlineCollapsed={menuState} items={menuItems} /> : ''}
        </>
    )
}

export default NavBar;