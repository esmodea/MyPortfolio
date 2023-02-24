import React, { useState } from 'react';
import NavBar from '../common/NavBar';
import LeftIcon from './LeftIcon';
import RightIcon from './RightIcon';
import contents from './contents';
import './gitpage.css'

const GitPage = () => {
    let isLeft = false
    return(
        <>
            <div className='page-container' >
                <NavBar/>
                {contents ? contents.map((item) => {
                    isLeft = !isLeft;
                    if(isLeft){
                        return <LeftIcon icon={item.icon} text={item.text} href={item.href}/>
                    } else {
                        return <RightIcon icon={item.icon} text={item.text} href={item.href}/>
                    }
                }) : 'Loading Page...'}
            </div>
        </>
    )
}

export default GitPage