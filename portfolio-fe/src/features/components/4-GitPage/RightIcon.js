import React from 'react';

const RightIcon = ({icon, text, href}) => {
    return(
        <article className='right-icon'>
            <a href={href} target='_blank'><img src={icon} /></a>
            <p>{text}</p>
        </article>
    )
}

export default RightIcon;