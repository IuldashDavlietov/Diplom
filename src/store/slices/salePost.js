import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const salePost = createAsyncThunk('sale/salePost', async (data, { rejectWithValue }) => {
    try {
        await fetch('http://localhost:3333/sale/send',
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data)
            });

    } catch (error) {
        return rejectWithValue(error.message);
    }
});


export const saleSlice = createSlice({

    name: 'sale',
    initialState: {
        status: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(salePost.pending, (state,) => {
                state.status = 'pending';
            })
            .addCase(salePost.fulfilled, (state) => {
                state.status = 'fulfilled';
            })
            .addCase(salePost.rejected, (state) => {
                state.status = 'rejected';
            })
    }
})
export default saleSlice.reducer;
