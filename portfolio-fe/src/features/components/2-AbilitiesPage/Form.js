import React from "react";
import IntakeForm from './IntakeForm';
import { useAuth0 } from '@auth0/auth0-react';

const Form = ({Child}) => {
    const { logout, user } = useAuth0();
    return(
        <div className="abilities-page">
            {Child === 'info-form'? <IntakeForm user={user} /> : ''}
        </div>
    )
}

export default Form;