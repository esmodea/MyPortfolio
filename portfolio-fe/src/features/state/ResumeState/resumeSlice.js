import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    firstLoad: true,
    data: [],
    isLoading: false,
    error: ''
};

export const fetchResume = createAsyncThunk(
    'resumeState/fetchResume', async (_, thunkAPI) => {
        try{
            const response = await axios.get('http://localhost:8000/resume')
                .then((res) => {
                    return res.data;
                })
                .catch(err => {
                    throw err
                })
            return await response;
        } catch (err) {
            return thunkAPI.rejectWithValue({error: err.message})
        }
    }
)

const resumeSlice = createSlice({
    name: 'resumeState',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(fetchResume.pending, (state) => {
            return(
                {
                    ...state,
                    isLoading: true,
                    firstLoad: false
                }
            )
        })
        builder.addCase(fetchResume.fulfilled, (state, action) => {
            return(
                {
                    ...state,
                    data: action.payload,
                    isLoading: false,
                    firstLoad: false
                }
            )
        })
        builder.addCase(fetchResume.rejected, (state, action) => {
            return(
                {
                    ...state,
                    error: action.error,
                    firstLoad: false
                }
            )
        })
    }
});



export const { loadResume } = resumeSlice.actions;
export default resumeSlice.reducer;