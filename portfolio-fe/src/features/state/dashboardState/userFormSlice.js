import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username: '',
    isRecruiter: false,
    isInterested: false,
    email: '',
    companyName: '',
    about: ''
}

const userFormState = createSlice({
    name: 'userForm',
    initialState,
    reducers: {
        alterInput: (state, {payload}) => {
            state[payload.key] = payload.info;
        }
    }
})

export const { alterInput } = userFormState.actions;

export default userFormState.reducer;