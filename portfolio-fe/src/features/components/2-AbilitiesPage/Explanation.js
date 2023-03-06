import React from "react";
import { MenuOutlined } from "@ant-design/icons";
import { useAuth0 } from '@auth0/auth0-react';

const Explanation = ({menu}) => {
    const { logout } = useAuth0();
    return(
        <>
            <div className="explanation">
                <h2 className="explanation-title">Hello and welcome to the user Dashboard!</h2>
                <button className="logout-button" onClick={() => logout()}>logout</button>
                <button className="menu-button" onClick={menu}><MenuOutlined /></button>
            </div>
        </>
    )
}

export default Explanation;