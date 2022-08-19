import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { IProduct } from "../../types/product";


type ProductsState = {
    products: IProduct[],
    wishlist: number[],
    loading: boolean,
    error: string | null
}

const initialState: ProductsState = {
    products: [],
    wishlist: JSON.parse(localStorage.getItem('wishlist') || '[]'),
    loading: false,
    error: null
}

export const getProducts = createAsyncThunk<IProduct[], undefined, { rejectValue: any }>(
    'product/getProducts',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('https://fakestoreapi.com/products')

            if (response.status !== 200)
                throw thunkAPI.rejectWithValue(response.status)

            return await response.data;

        } catch (error) {
            return thunkAPI.rejectWithValue("REQUEST DATA ERROR")
        }
    })


const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addToWishList: (state, action: PayloadAction<number>) => {
            if (!state.wishlist.includes(action.payload)) {
                state.wishlist.push(action.payload)
                localStorage.setItem('wishlist', JSON.stringify(state.wishlist))
            }
        },
        removeFromWishList: (state, action: PayloadAction<number>) => {
            if (state.wishlist.includes(action.payload)) {
                state.wishlist = state.wishlist.filter(item => item !== action.payload)
                localStorage.setItem('wishlist', JSON.stringify(state.wishlist))
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
            })
            .addCase(getProducts.pending, (state) => {
                state.loading = true;
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            })
    }
})

export const { addToWishList, removeFromWishList } = productSlice.actions;
export const productReducer = productSlice.reducer;