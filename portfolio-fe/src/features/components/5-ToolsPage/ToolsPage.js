import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import NavBar from '../common/NavBar';
import Foreground from './Foreground';
import Background from './Background';
import { fetchTools } from '../../state/toolsState/toolsSlice';
import { pushCacheTools, pushContentCacheTools} from '../../state/common/cacheSlice';
import './tools.css';

const ToolsPage = () => {
    const state = useSelector(state => state.tools);
    const { cache, contentCache } = useSelector(state => state.cache.tools);
    const [display, setDisplay] = useState([]);
    const dispatch = useDispatch();
    let isIndent = true;
    
    const populateCache = (arr) => {
        arr.map((item) => { 
            // console.log('item', item) 
            if(!cache[item.typeID]){
                const newObj = {
                    id: item.typeID,
                    type: item.type
                };
                // console.log('newObj', newObj)
                dispatch(pushCacheTools(newObj)); 
            }
            // console.log(contentCache[item.id])
            if(!contentCache[item.id]){
                const newObj = {
                    id: item.id,
                    parentID: item.typeID,
                    content: {
                        text: item.text,
                        icon: item.icon
                    }
                } 
                // console.log('newObj', newObj) 
                dispatch(pushContentCacheTools(newObj)); 
            }
        });
        // console.log(cache)
    }
    
    const toolsFilter = (arr) => {
        let final = [...cache];
        let content = [...contentCache];
        final.shift();
        content.shift();
        console.log(cache, contentCache)
        for(let i = 0; i < content.length; i++){
            // console.log(content[i], content, final[content[i].parentID - 1]);
            console.log(final)
            if(!final[content[i].parentID - 1].content){
                final[content[i].parentID - 1] = {
                    type: final[content[i].parentID - 1].type,
                    content: [{
                        text: content[i].content.text,
                        icon: content[i].content.icon
                    }]
                }
            } else {
                console.log(content[i])
                final[content[i].parentID - 1].content.push({
                    text: content[i].content.text,
                    icon: content[i].content.icon
                })
            }
        }
        console.log(final)
        return final;
    } 



    useEffect(() => {
        if(state.firstLoad){
            // updateCache({
            //     cache: [],
            //     contentCache: []
            // })
        }
    })

    useEffect(() => {
        dispatch(fetchTools());
    }, [dispatch])

    useEffect(() => {
        populateCache(state.data);
        setDisplay(toolsFilter());
    }, [state.data])

    return(
        <>
            <div className='page-container' >
                <NavBar/>
                {display.map((item) => {
                    console.log(item)
                    isIndent = !isIndent;
                    if(isIndent){
                        if(item.content)return <Background itemArr={item.content} />
                    } else {
                        if(item.content)return <Foreground itemArr={item.content} />
                    }
                })}
            </div>
        </>
    )
}

export default ToolsPage