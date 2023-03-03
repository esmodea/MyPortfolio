import { configureStore } from '@reduxjs/toolkit';
import navState from './common/navBarSlice';
import resumeSlice from './resumeState/resumeSlice';
import gitSlice from './gitState/gitSlice';
import toolsSlice from './toolsState/toolsSlice';

export const store = configureStore({
    reducer: {
        nav: navState,
        resume: resumeSlice, 
        git: gitSlice,
        tools: toolsSlice,
    }
})