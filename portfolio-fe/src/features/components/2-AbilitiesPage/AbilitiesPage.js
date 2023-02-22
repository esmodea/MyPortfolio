import React from 'react';
import Login from './Login';
import NavBar from '../common/NavBar';
import Footer from '../common/Footer';
import { useAuth0 } from '@auth0/auth0-react';
import './abilities.css';

const AbilitiesPage = () => {
    const {isLoading, user, logout} = useAuth0();
    return(
        <>
            <div className='page-container' >
                <NavBar />
                <button onClick={() => logout()}>logout</button>
                <Footer />
            </div>
        </>
    )
}

export default AbilitiesPage