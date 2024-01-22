import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCategoryId = createAsyncThunk(
    'category/fetchCategoryId', async (id, { rejectWithValue }) => {
        try {
            const response = await fetch(`http://localhost:3333/categories/${id}`);
            const data = await response.json();
            return data;
        }
        catch (error) {
            return rejectWithValue(error.message);
        }
    });

export const categorySlice = createSlice({
    name: 'category',
    initialState: {
        categoryIdList: {},
        status: null,
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchCategoryId.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(fetchCategoryId.fulfilled, (state, action) => {
                state.categoryIdList = action.payload;
            })
            .addCase(fetchCategoryId.rejected, (state) => {
                state.status = 'rejected';
            });
    }
})

export default categorySlice.reducer;