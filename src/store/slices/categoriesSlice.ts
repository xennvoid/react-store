import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";


interface CategoriesState {
    categories: string[],
    currentCategorie: string;
}

const initialState: CategoriesState = {
    categories: [],
    currentCategorie: 'all'
}

export const getCategories = createAsyncThunk<string[], undefined, { rejectValue: any }>(
    'categorie/getCategories',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('https://fakestoreapi.com/products/categories')

            if (response.status !== 200)
                throw thunkAPI.rejectWithValue(response.status)

            return await response.data;

        } catch (error) {
            return thunkAPI.rejectWithValue("REQUEST DATA ERROR")
        }
    })

const categoriesSlice = createSlice({
    name: 'categorie',
    initialState,
    reducers: {
        changeCurrentCategorie: (state, action: PayloadAction<string>) => {
            state.currentCategorie = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCategories.fulfilled, (state, action) => {
                state.categories = ['all', ...action.payload]
            })
    }
})

export const { changeCurrentCategorie } = categoriesSlice.actions;
export const categoriesReducer = categoriesSlice.reducer;