import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    firstLoad: true,
    data: [],
    isLoading: false,
    error: ''
};

export const fetchGit = createAsyncThunk(
    'ResumeState/fetchResume', async (_, thunkAPI) => {
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
                return(
                    {
                        ...state,
                        isLoading: true
                    }
                )
            })
            builder.addCase(fetchGit.fulfilled, (state, action) => {
                return(
                    {
                        ...state,
                        data: action.payload,
                        isLoading: false
                    }
                )
            })
            builder.addCase(fetchGit.rejected, (state, action) => {
                return(
                    {
                        ...state,
                        error: action.error
                    }
                )   
            })
    }
});

export default gitSlice.reducer;