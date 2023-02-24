import React from 'react';

const LeftIcon = ({icon, text, href}) => {
    return(
        <article className='left-icon'>
            <img src={icon} />
            <p>{text}</p>
        </article>
    )
}

export default LeftIcon;