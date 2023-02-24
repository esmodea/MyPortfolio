import React from 'react';

const Item = ({text, icon, flex}) => {
    console.log('working!')
    return(
        <div className='item' style={flex ? {flexDirection: flex}: {}}>
            <img className='item-icon' src={icon ? icon : 'none'} alt={'tech-logo'} />
            <p className='item-text'>{text ? text : ''}</p>
        </div>
    )
};

export default Item