import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedPage: '/about'
}

const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducers:{
        selectPage: (state, action) => {
            if(typeof action.payload === 'string'){
                state.selectedPage = action.payload;
            }
        }
    }
})

export const { selectPage } = navSlice.actions;

export default navSlice.reducer;