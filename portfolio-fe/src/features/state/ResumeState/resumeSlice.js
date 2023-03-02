import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

initialState = [];

const resumeSlice = createSlice({
    name: 'resumeState',
    initialState,
    reducers:{
        loadResume: (state, action) => {
            axios.get('http://localhost:8000/resume')
                .then(res => {
                    console.log(res)
                })
                .catch(err => {
                    console.log(err)
                });
            if(typeof(action.payload) === 'object' && action.payload.isArray){
                state = action.payload;
            };
        }
    }
});



export const { loadResume } = resumeSlice.actions;
export default resumeSlice;