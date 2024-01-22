import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCategories = createAsyncThunk('categories/fetchCategories', async (_, { rejectWithValue }) => {
    try {
        const response = await fetch('http://localhost:3333/categories/all');
        const data = await response.json();
        return data;
    }
    catch (error) {
        return rejectWithValue(error.message);
    }
});

export const categoriesSlice = createSlice({
    name: 'categories',

    initialState: {
        categoriesList: [],

        status: null,
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchCategories.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.categoriesList = action.payload;
            })
            .addCase(fetchCategories.rejected, (state) => {
                state.status = 'rejected';
            });
    }
})
export default categoriesSlice.reducer;
