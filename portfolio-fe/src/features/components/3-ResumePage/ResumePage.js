import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchResume } from '../../state/resumeState/resumeSlice';
import NavBar from '../common/NavBar';
import Footer from '../common/Footer';
import Overall from './Overall';
import Projects from './Projects';
import { updateCacheResume, pushCacheResume, pushContentCacheResume, pushTextCacheResume } from '../../state/common/cacheSlice';
import './resume.css';
import '../common/common.css';
import Data from './resumeData'

const ResumePage = () => {
    const state = useSelector(state => state.resume);
    const { cache, contentCache, textCache } = useSelector(state => state.cache.resume);
    const dispatch = useDispatch();
    const [display, setDisplay] = useState([]);

    const populateCache = (arr) => {
        arr.map((item) => { 
            // console.log('item', item) 
            if(!cache[item.id]){
                const newObj = {id: item.id, title: item.title};
                // console.log('newObj', newObj)
                dispatch(pushCacheResume(newObj)); 
            }
            if(!contentCache[item.contentID]){
                const newObj = {
                    id: item.contentID,
                    parentID: item.id,
                    content: {
                        smallTitle: item.smallTitle,
                        github: item.github,
                        website: item.website,
                        text: []
                    } 
                } 
                // console.log('newObj', newObj) 
                dispatch(pushContentCacheResume(newObj)); 
            };   
            if(!textCache[item.textID]){
                const newObj = {id: item.textID, parentID: item.contentID, text: item.text};
                // console.log('newObj', newObj) 
                if(item.textID !== null)dispatch(pushTextCacheResume(newObj));
            }
        });
    }

    const resumeFilter = () => {
        let final = []
        let content = []
        let text = [...textCache];
        text.shift();
        for(let i = 1; i <= contentCache.length; i++){
            if(contentCache[i]){
                content[i] = {
                    parentID: contentCache[i].parentID,
                    smallTitle: contentCache[i].content.smallTitle,
                    github: contentCache[i].content.github,
                    website: contentCache[i].content.website
                }
            }
        }
        for(let i = 0; i < text.length; i++){
            // console.log(text[i])
            if(!content[text[i].parentID].text){
                content[text[i].parentID] = {
                    parentID: contentCache[text[i].parentID].parentID,
                    smallTitle: contentCache[text[i].parentID].content.smallTitle,
                    github: contentCache[text[i].parentID].content.github,
                    website: contentCache[text[i].parentID].content.website,
                    text: [text[i].text]
                }
            } else {
                content[text[i].parentID].text.push(text[i].text)
            }
        }
        content = [...content]
        content.shift();
        final = [...cache]
        final.shift();
        for(let i = 0; i < content.length; i++){
            // console.log(content[i], content, final[content[i].parentID - 1]);
            
            if(!final[content[i].parentID - 1].content){
                final[content[i].parentID - 1] = {
                    title: final[content[i].parentID - 1].title,
                    content: [{
                        smallTitle: content[i].smallTitle,
                        github: content[i].github,
                        website: content[i].website,
                        text: content[i].text
                    }]
                }
            } else {
                final[content[i].parentID - 1].content.push({
                    smallTitle: content[i].smallTitle,
                    github: content[i].github,
                    website: content[i].website,
                    text: content[i].text
                })
            }
        }
        return final;
    }

    useEffect(() => {
        dispatch(fetchResume());
        // dispatch(updateCache({cache: [], contentCache: [], textCache: []}))
    }, [dispatch])

    useEffect(() => {
        populateCache(state.data);
        setDisplay(resumeFilter());
    }, [state.data])

    return(
        <>
            <div className='page-container' >
                <div className='resume-container'>
                    <Overall />
                    {console.log(display)}
                    {Data.map(({title, content}) => {
                        if(title && content)return <Projects title={title} content={content} />
                    })}
                </div>
                <Footer />
            </div>
        </>
    )
}

export default ResumePage