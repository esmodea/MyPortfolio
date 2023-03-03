import { configureStore } from '@reduxjs/toolkit';
import navState from './common/navBarSlice';
import resumeSlice from './resumeState/resumeSlice';

export const store = configureStore({
    reducer: {
        nav: navState,
        resume: resumeSlice
    }
})