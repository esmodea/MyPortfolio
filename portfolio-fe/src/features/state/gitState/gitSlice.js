import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    data: [],
    isLoading: false,
    error: ''
};

export const fetchGit = createAsyncThunk(
    'resumeState/fetchResume', async (_, thunkAPI) => {
        try{
            const response = await axios.get('http://localhost:8000/github')
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

const gitSlice = createSlice({
    name: 'gitState',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(fetchGit.pending, (state) => {
            state.data = []
            state.isLoading = true;
        })
        builder.addCase(fetchGit.fulfilled, (state, action) => {
            state.data = action.payload
            state.isLoading = false;
        })
        builder.addCase(fetchGit.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        })
    }
});

export default gitSlice.reducer;