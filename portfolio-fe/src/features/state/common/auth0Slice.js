import { createSlice } from "@reduxjs/toolkit";
import {useAuth0} from '@auth0/auth0-react';

const initialState = {
    isLoading: false,
    user: {},
    isAuthenticated: false,
}

const auth0State = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        updateAuth: (state, {payload}) => {
            const {isLoading, user, isAuthenticated} = payload;
            return {
                isLoading,
                user,
                isAuthenticated
            }
        }
    }
})

export const { updateAuth } = auth0State.actions;

export default auth0State.reducer;