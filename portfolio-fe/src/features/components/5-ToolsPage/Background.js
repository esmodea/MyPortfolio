import React from 'react';
import Item from './Item';

const Background = ({itemArr}) => {
    return(
        <>
            <div className='background'>
                {itemArr.map((item) => {
                    <Item text={item.text} icon={item.icon} flex={'row-reverse'} />
                })}
            </div>
        </>
    );
};

export default Background;