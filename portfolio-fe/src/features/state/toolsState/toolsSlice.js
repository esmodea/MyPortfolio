import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    firstLoad: true,
    data: [],
    isLoading: false,
    error: ''
};

export const fetchTools = createAsyncThunk(
    'resumeState/fetchResume', async (_, thunkAPI) => {
        try{
            const response = await axios.get('http://localhost:8000/tools')
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

const toolsSlice = createSlice({
    name: 'toolsState',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(fetchTools.pending, (state) => {
            return(
                {
                    ...state,
                    isLoading: true,
                    firstLoad: false
                }
            )
        })
        builder.addCase(fetchTools.fulfilled, (state, action) => {
            return(
                {
                    ...state,
                    data: action.payload,
                    isLoading: false,
                    firstLoad: false
                }
            )
        })
        builder.addCase(fetchTools.rejected, (state, action) => {
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

export default toolsSlice.reducer;