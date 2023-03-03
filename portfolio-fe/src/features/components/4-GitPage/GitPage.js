import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import NavBar from '../common/NavBar';
import Footer from '../common/Footer';
import LeftIcon from './LeftIcon';
import RightIcon from './RightIcon';
import { fetchGit } from '../../state/gitState/gitSlice';
import './gitpage.css';

const GitPage = () => {
    const state = useSelector((state) => state.git)
    const dispatch = useDispatch();
    const contents = state.data;

    useEffect(() => {
        dispatch(fetchGit())
    }, [dispatch])

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
                <Footer/>
            </div>
        </>
    )
}

export default GitPage