import React from 'react';

const LeftIcon = ({icon, text, href}) => {
    return(
        <article className='left-icon'>
            <a href={href} target='_blank'><img src={icon} /></a>
            <p>{text}</p>
        </article>
    )
}

export default LeftIcon;