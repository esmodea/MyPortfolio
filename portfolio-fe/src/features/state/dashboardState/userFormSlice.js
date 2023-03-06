import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username: '',
    email: '',
    companyName: '',
    isRecruiter: false,
    isInterestedIn: [],
    about: ''
}

const userFormState = createSlice({
    name: 'userForm',
    initialState,
    reducers: {
        alterInput: (state, {payload}) => {
            if(payload.key !== 'isInterestedIn')state[payload.key] = payload.info;
            if(payload.key === 'isInterestedIn')state[payload.key] = [...payload.info]
        }
    }
})

export const { alterInput } = userFormState.actions;

export default userFormState.reducer;