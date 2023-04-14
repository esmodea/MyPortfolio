import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username: '',
    email: '',
    companyName: '',
    isRecruiter: false,
    isInterestedIn: 0,
    about: ''
}

const userFormState = createSlice({
    name: 'userForm',
    initialState,
    reducers: {
        alterInput: (state, {payload}) => {
            state[payload.key] = payload.info;
        },
        updateUser: (state, {payload}) => {
            return {
                username: payload.username,
                email: payload.email,
                companyName: payload.company,
                isRecruiter: payload.isRecruiter,
                recruitingFor: payload.recruitingFor,
                about: payload.about,
            }
        }
    }
})

export const { alterInput, updateUser } = userFormState.actions;

export default userFormState.reducer;