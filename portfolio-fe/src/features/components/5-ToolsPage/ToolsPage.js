import React from 'react';
import NavBar from '../common/NavBar';
import Foreground from './Foreground';
import Background from './Background';
import contents from './contents';

const ToolsPage = () => {
    return(
        <>
            <div className='page-container' >
                <NavBar/>
                <Foreground />;
                <Background />;
                <Foreground />;
            </div>
        </>
    )
}

export default ToolsPage