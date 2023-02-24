import React from 'react';

const Item = ({text, icon, flex}) => {
    return(
        <div style={{flexDirection: flex}}>
            <img>{icon}</img>
            <p>{text}</p>
        </div>
    )
};

export default Item