import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Form from './Form';
import './abilities.css';

const AbilitiesPage = () => {
    const { page } = useSelector(state => state.dashboardPage);

    return(
        <>
            <div className='page-container abilities'>
                <Form Child={page} />
            </div>
        </>
    )
}

export default AbilitiesPage