import React from 'react';
import Login from '../2-AbilitiesPage/Login';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { Route } from 'react-router';


const PrivateRoute = ({ children }) => {
    const { isAuthenticated } = useAuth0();
    const navigate = useNavigate();
    const redirect = () => {
        navigate('/login')
    }
    return isAuthenticated ? children : <Login />
}

export default PrivateRoute