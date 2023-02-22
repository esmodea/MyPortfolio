import React from "react";

const Title = ({ text, className }) => {
    return(
        <div className={className}>
            <h2>{text}</h2>
        </div>
    )
}

export default Title;