import React from 'react';

const Item = ({text, icon, flex}) => {
    return(
        <div style={{flexDirection: flex}}>
            <img src={icon} />
            <p>{text}</p>
        </div>
    )
};

export default Item