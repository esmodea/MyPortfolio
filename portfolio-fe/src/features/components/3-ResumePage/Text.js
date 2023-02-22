import React from 'react';

const Text = ({text, className}) => {
    return(
        <div>
            <p className={className}>{text}</p>
        </div>
    )
}

export default Text;