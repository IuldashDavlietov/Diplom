import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";




export const fetchProductId = createAsyncThunk(
    'product/fetchProductId', async (product_id, { rejectWithValue }) => {
        try {
            const response = await fetch(`http://localhost:3333/products/${product_id}`);
            const data = await response.json();
            return data[0];
        }
        catch (error) {
            return rejectWithValue(error.message);
        }
    });

export const singleProduct = createSlice({
    name: 'product',
    initialState: {
        productIdList: [],
        status: null,
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchProductId.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(fetchProductId.fulfilled, (state, action) => {
                state.productIdList = action.payload;
            })
            .addCase(fetchProductId.rejected, (state) => {
                state.status = 'rejected';
            });
    }
})
export default singleProduct.reducer;