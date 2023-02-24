import React, { useState } from 'react';
import NavBar from '../common/NavBar';
import LeftIcon from './LeftIcon';
import RightIcon from './RightIcon';
import contents from './contents';

const GitPage = () => {
    const [isLeft, setIsLeft] = useState();
    return(
        <>
            <div className='page-container' >
                <NavBar/>
                {contents ? contents.map((item) => {
                    
                }) : 'Loading Page...'}
            </div>
        </>
    )
}

export default GitPage