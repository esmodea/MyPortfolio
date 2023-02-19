import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const copyEmail = () => {
        navigator.clipboard.writeText('esmodearburk@gmail.com')
        alert('Email copied!')
    }

    return (
        <>
            <div className='footer'>
                <Link className='footer-link' target={'_blank'} to={'https://www.linkedin.com/in/esmodea-burk/'} >My LinkedIn</Link>
                <p className='footer-dot'>.</p>
                <Link className='footer-link' onClick={() => {copyEmail()}} >My Email</Link>
                <p className='footer-dot'>.</p>
                <a className='footer-link' href='../../assets/Esmodea-Resume.pdf' download={true} >My Resume</a>
            </div>
        </>
    )   
};

export default Footer;