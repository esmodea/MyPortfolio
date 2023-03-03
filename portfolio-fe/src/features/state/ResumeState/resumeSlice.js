import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
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
            state.data = []
            state.isLoading = true;
        })
        builder.addCase(fetchResume.fulfilled, (state, action) => {
            state.data = action.payload
            state.isLoading = false;
        })
        builder.addCase(fetchResume.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        })
    }
});



export const { loadResume } = resumeSlice.actions;
export default resumeSlice.reducer;