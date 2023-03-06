import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: '',
    email: ''
}

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        updateUser: (state, {payload}) => {
            state.name = payload.name;
            state.email = payload.email;
        }
    }
})

export const {updateUser} = userSlice.actions;

export default userSlice.reducer;