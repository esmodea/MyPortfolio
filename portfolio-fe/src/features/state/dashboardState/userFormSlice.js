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
        
    }
})

export default userFormState.reducer;