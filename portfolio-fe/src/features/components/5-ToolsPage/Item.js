import React from 'react';

const Item = ({text, icon, flex}) => {
    return(
        <div className='item' style={flex ? {flexDirection: flex}: {}}>
            <img className='item-icon' src={icon} alt={'tech-logo'} />
            <p className='item-text'>{text ? text : ''}</p>
        </div>
    )
};

export default Item