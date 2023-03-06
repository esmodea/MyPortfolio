import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    page: 'intakeForm'
}

const dashboardPageState = createSlice({
    name: 'dashboardPage',
    initialState,
    reducers: {
        choosePage: (state, {payload}) => {
            if(typeof payload === 'string')state['page'] = payload;
        }
    }
})

export const { choosePage } = dashboardPageState.actions;

export default dashboardPageState.reducer;