import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const orderPost = createAsyncThunk('order/orderPost', async (data, { rejectWithValue }) => {
    try {
        await fetch('http://localhost:3333/order/send',
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data)
            });
    }
    catch (error) {
        return rejectWithValue(error.message);
    }
});


export const orderSlice = createSlice({
    name: 'order',
    initialState: {
        status: null,
    },
    reducers: {
        resetOrderStatus: (state) => {
            state.status = null;
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(orderPost.pending, (state,) => {
                state.status = 'pending';
            })
            .addCase(orderPost.fulfilled, (state) => {
                state.status = 'fulfilled';
            })
            .addCase(orderPost.rejected, (state) => {
                state.status = 'rejected';
            })
    }
})
export const { resetOrderStatus } = orderSlice.actions;
export default orderSlice.reducer;
