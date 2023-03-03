import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    resume: {
        cache: [],
        contentCache: [],
        textCache: [],
    },
    tools: {
        cache: [],
        contentCache: [],
        textCache: [],
    },
    github: {
        cache: [],
        contentCache: [],
        textCache: [],
    }
}

const cacheState = createSlice({
    name: 'cache',
    initialState,
    reducers:{
        updateCacheResume: (state, action) => {
            if(action.payload.cache)state.resume.cache = action.payload.cache;
            if(action.payload.contentCache)state.resume.contentCache = action.payload.contentCache;
            if(action.payload.textCache)state.resume.textCache = action.payload.textCache;
        },
        pushCacheResume: (state, {payload}) => {
            // console.log('delivered payload!')
            console.log(payload)
            if(payload.id){
                state.resume.cache[payload.id] = {title: payload.title};
            }
        },
        pushContentCacheResume: (state, {payload}) => {
            // console.log('delivered payload!')
            // console.log(payload)
            if(payload.id){
                state.resume.contentCache[payload.id] = {
                    id: payload.id,
                    parentID: payload.parentID,
                    content: {
                        smallTitle: payload.content.smallTitle,
                        github: payload.content.github,
                        website: payload.content.website
                    }
                };
            }
        },
        pushTextCacheResume: (state, {payload}) => {
            // console.log('delivered payload!')
            // console.log(payload)
            if(payload.id){
                state.resume.textCache[payload.id] = {
                    id: payload.id,
                    parentID: payload.parentID,
                    text: payload.text
                };
            }
        },
        attachToContentResume: (state, {payload}) => {
            // console.log(state.contentCache, state.contentCache[payload.id], payload)
            if(payload.id === payload.parentID && state.resume.contentCache[payload.parentID]){
                if(state.resume.contentCache[payload.parentID].content.text)state.resume.contentCache[payload.parentID].content.text.push();
                state.resume.contentCache[payload.parentID].content.text = [];
            }
        },
        attachToMainResume: (state, {payload}) => {
            if(payload.id === payload.parentID){
                if(state.resume.cache[payload.parentID].content)state.resume.cache[payload.parentID].content.push();
                state.resume.cache[payload.parentID].content = [];
            }
        },
        pushContentCacheTools: (state, {payload}) => {
            // console.log(payload)
            if(payload.id){
                state.tools.contentCache[payload.id] = {
                    id: payload.id,
                    parentID: payload.parentID,
                    content: {
                        text: payload.content.text,
                        icon: payload.content.icon
                    }
                };
            }
        }, 
        pushCacheTools: (state, {payload}) => {
            if(payload.id){
                state.tools.cache[payload.id] = {id: payload.id, type: payload.type};
            }
        }
    }
})

export const { updateCacheResume, pushCacheResume, pushContentCacheResume, pushTextCacheResume, attachToContentResume, attachToMainResume, pushCacheTools, pushContentCacheTools } = cacheState.actions;

export default cacheState.reducer;