import React, { useState } from 'react';
import axios from 'axios';
import NavBar from '../common/NavBar';
import { useAuth0 } from '@auth0/auth0-react';
import './abilities.css';

const Login = () => {
    const { loginWithRedirect } = useAuth0();
    const [nasaPhoto, setNasaPhoto] = useState();
    const [hiddenbg, setHiddenbg] = useState({opacity: 0});
    axios('https://api.nasa.gov/planetary/apod?api_key=EUurLVLKFArmlrR2GxDniAXprjgAfZ312dketdTV')
        .then((res) => {
            setNasaPhoto(res.data.hdurl);
        })
        .catch((err) => {
            console.log(err)
        })
    return(
        <>  
            <div className='page-container'>
                <NavBar />
                <div className='login-content'>
                    <p className='info'>You are looking at the nasa Astronomy Picture of the Day</p>
                    <div className='login-window'>
                        <button className='login-button' onClick={() => {loginWithRedirect()}}>Login to continue</button>
                    </div>
                </div>
                <img className='login-bg' onLoad={() => {setHiddenbg({opacity: 100})}} src={nasaPhoto} style={hiddenbg} alt='nasa astrology photo of the day' />
            </div>
        </>
    )
}

export default Login