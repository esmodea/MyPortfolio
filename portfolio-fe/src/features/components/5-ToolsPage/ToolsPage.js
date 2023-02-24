import React from 'react';
import NavBar from '../common/NavBar';
import Foreground from './Foreground';
import Background from './Background';
import contents from './contents';
import './tools.css';

const ToolsPage = () => {
    return(
        <>
            <div className='page-container' >
                <NavBar/>
                <Foreground itemArr={contents.frontEnd} />
                <Background itemArr={contents.backEnd} />
                <Foreground itemArr={contents.essentials} />
            </div>
        </>
    )
}

export default ToolsPage