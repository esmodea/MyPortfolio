import { configureStore } from '@reduxjs/toolkit';
import navState from './common/navBarSlice';

export const store = configureStore({
    reducer: {
        nav: navState
    }
})