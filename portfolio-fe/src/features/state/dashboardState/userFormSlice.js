import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username: 'esmodea',
    email: 'esmodearburk@gmail.com',
    companyName: 'me',
    isRecruiter: true,
    isInterestedIn: 2,
    about: 'lol this is filler'
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