import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk('products/fetchProducts', async (_, { rejectWithValue }) => {
    try {
        const response = await fetch('http://localhost:3333/products/all');
        const data = await response.json();

        return data;

    } catch (error) {
        return rejectWithValue(error.message)
    }
});

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        productsList: [],
        status: null,
        minPrice: '',
        maxPrice: '',
    },

    reducers: {
        setMinPrice: (state, action) => {
            state.minPrice = action.payload;
        },
        setMaxPrice: (state, action) => {
            state.maxPrice = action.payload;
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.productsList = action.payload;
            })
            .addCase(fetchProducts.rejected, (state) => {
                state.status = 'rejected';
            })
    }
})

export default productsSlice.reducer;
export const { setMinPrice, setMaxPrice } = productsSlice.actions;