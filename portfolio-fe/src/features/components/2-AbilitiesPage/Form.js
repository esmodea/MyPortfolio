import React from "react";
import { useAuth0 } from '@auth0/auth0-react';

const Form = ({Child}) => {
    const { logout } = useAuth0();
    return(
        <div className="abilities-page">
            {Child? <Child />: ''}
        </div>
    )
}

export default Form;