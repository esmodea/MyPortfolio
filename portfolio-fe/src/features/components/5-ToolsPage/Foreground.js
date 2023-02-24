import React from 'react';
import Item from './Item';

const Foreground = ({itemArr}) => {
    return(
        <>
            <div className='foreground'>
                {itemArr.map((item) => {
                    <Item text={item.text} icon={item.icon} flex={'row'} />
                })}
            </div>
        </>
    );
};

export default Foreground;