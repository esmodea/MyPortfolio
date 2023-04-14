import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    firstLoad: true,
    data: [],
    isLoading: false,
    error: ''
};

export const getUserById = createAsyncThunk(
    'userAsyncSlice/fetchUser', async (userId, thunkAPI) => {
        return await axios.get(`http://localhost:8000/user?id=${userId}`)
                .then((res) => {
                    console.log(res)
                    return res.data;
                })
                .catch(err => {
                    thunkAPI.rejectWithValue({error: err.message})
                })
    }
)

const userAsyncSlice = createSlice({
    name: 'userAsyncSlice',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(getUserById.pending, (state) => {
            return(
                {
                    ...state,
                    isLoading: true,
                    firstLoad: false
                }
            )
        })
        builder.addCase(getUserById.fulfilled, (state, action) => {
            return(
                {
                    ...state,
                    data: action.payload,
                    isLoading: false,
                    firstLoad: false
                }
            )
        })
        builder.addCase(getUserById.rejected, (state, action) => {
            return(
                {
                    ...state,
                    error: action.payload.error,
                    firstLoad: false
                }
            )
        })
    }
});



export const { fetchUser } = userAsyncSlice.actions;
export default userAsyncSlice.reducer;