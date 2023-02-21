import React from 'react';
import Login from './Login';
import NavBar from '../common/NavBar';
import Footer from '../common/Footer';
import { Navigate } from 'react-router';
import { useAuth0 } from '@auth0/auth0-react';

const AbilitiesPage = () => {
    const {isLoading, user, loginWithRedirect, logout} = useAuth0();
    return(
        <>
            <div className='page-container' >
                <NavBar />
                logged in!
                <Footer />
            </div>
        </>
    )
}

export default AbilitiesPage