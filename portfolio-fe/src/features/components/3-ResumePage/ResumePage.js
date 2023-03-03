import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchResume } from '../../state/resumeState/resumeSlice';
import NavBar from '../common/NavBar';
import Footer from '../common/Footer';
import Overall from './Overall';
import Projects from './Projects';
import './resume.css'
import axios from 'axios';

const ResumePage = () => {
    const state = useSelector((state) => state.resume)
    const dispatch = useDispatch();
    const cache = [];
    const contentCache = [];
    const textCache = [];

    const resumeFilter = (arr) => {
        arr.map((item) => {
            if(!cache[item.id])cache[item.id] = {id: item.id, title: item.title};
            if(!contentCache[item.contentID])contentCache[item.contentID] = {id: item.contentID, parentID: item.id, content: {
                smallTitle: item.smallTitle,
                github: item.github,
                website: item.website
            }};
            if(!textCache[item.textID])textCache[item.textID] = {id: item.textID, parentID: item.contentID, text: item.text};
        })
        for(let i = 1; i <= textCache.length; i++){
            for(let x = 1; x <= contentCache.length; x++){
                if(textCache[i]){
                    if(x == textCache[i].parentID){
                        if(contentCache[x].content.text){
                            contentCache[x].content.text.push(textCache[i].text);
                        } else {
                            contentCache[x].content.text = [textCache[i].text];
                        }
                    }
                }
            }
        }
        for(let i = 1; i <= contentCache.length; i++){
            for(let x = 1; x <= cache.length; x++){
                if(contentCache[i]){
                    if(x == contentCache[i].parentID){
                        if(cache[x].content){
                            cache[x].content.push(contentCache[i].content)
                        } else {
                            cache[x].content = [contentCache[i].content];
                        }
                    }
                }
            }
        }
        console.log(cache, contentCache, textCache)
        return cache;
    }

    useEffect(() => {
        dispatch(fetchResume())
    }, [dispatch])

    return(
        <>
            <div className='page-container' >
                <NavBar/>
                <div className='resume-container'>
                    <Overall />
                    {resumeFilter(state.data).map(({title, content}) => {
                        return <Projects title={title} content={content} />
                    })}
                </div>
                <Footer />
            </div>
        </>
    )
}

export default ResumePage