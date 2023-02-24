import React from 'react';
import Item from './Item';

const Foreground = ({itemArr}) => {
    return(
        <>
            <div className='foreground'>
                {itemArr ? itemArr.map((item) => {
                    return <Item text={item.text} icon={item.icon} flex={'row'} />
                }): <div>Is Loading...</div>}
            </div>
        </>
    );
};

export default Foreground;