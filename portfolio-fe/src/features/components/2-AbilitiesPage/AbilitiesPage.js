import React from 'react';
import NavBar from '../common/NavBar';
import Form from './Form';
import './abilities.css';

const AbilitiesPage = () => {
    return(
        <>
            <div className='page-container abilities'>
                <NavBar />
                <Form />
            </div>
        </>
    )
}

export default AbilitiesPage