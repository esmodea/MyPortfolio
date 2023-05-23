import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    data: [],
    isLoading: false,
    error: ''
};

export const deleteUserById = createAsyncThunk(
    'userAsyncDeleteSlice/deleteUser', async (userId, thunkAPI) => {
        return await axios.delete(`http://localhost:8000/delete-user?id=${userId}`)
                .then((res) => {
                    console.log(res)
                    return res.data;
                })
                .catch(err => {
                    thunkAPI.rejectWithValue({error: err.message})
                })
    }
)

const userAsyncDeleteSlice = createSlice({
    name: 'userAsyncDeleteSlice',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(deleteUserById.pending, (state) => {
            return(
                {
                    ...state,
                    isLoading: true
                }
            )
        })
        builder.addCase(deleteUserById.fulfilled, (state, action) => {
            return(
                {
                    ...state,
                    data: action.payload,
                    isLoading: false
                }
            )
        })
        builder.addCase(deleteUserById.rejected, (state, action) => {
            return(
                {
                    ...state,
                    error: action.payload.error
                }
            )
        })
    }
});



export const { deleteUser } = userAsyncDeleteSlice.actions;
export default userAsyncDeleteSlice.reducer;