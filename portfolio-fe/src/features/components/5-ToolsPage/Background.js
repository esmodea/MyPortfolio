import React from 'react';
import Item from './Item';

const Background = ({itemArr}) => {
    return(
        <>
            <div className='background'>
                {itemArr ? itemArr.map((item) => {
                    return <Item text={item.text} icon={item.icon} flex={'row-reverse'} />
                }): <div>Is Loading...</div>}
            </div>
        </>
    );
};

export default Background;