import React from 'react';
import NavBar from '../common/NavBar';
import Footer from '../common/Footer';
import { useAuth0 } from '@auth0/auth0-react';

const Login = () => {
    const { loginWithRedirect } = useAuth0();
    return(
        <>  
            <div className='page-container'>
                <NavBar />
                <button onClick={() => {loginWithRedirect()}}>login</button>
                <Footer />
            </div>
        </>
    )
}

export default Login