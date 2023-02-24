import React from 'react';

const RightIcon = ({icon, text, href}) => {
    return(
        <article className='right-icon'>
            <img src={icon} />
            <p>{text}</p>
        </article>
    )
}

export default RightIcon;