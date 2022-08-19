import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../types/product";

export interface ICartProduct extends IProduct {
    quantity: number;
}

type CartState = {
    cart: ICartProduct[],
}

const initialState: CartState = {
    cart: [],
}

const cartSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<IProduct>) => {
            const item = state.cart.find(item => item.id === action.payload.id)
            if (item) {
                item.quantity++;
            } else {
                state.cart.push({ ...action.payload, quantity: 1 })
            }
        },
        removeFromCart: (state, action: PayloadAction<number>) => {
            state.cart = state.cart.filter(item => item.id !== action.payload)
        },
        increaseProductCount: (state, action: PayloadAction<number>) => {
            const item = state.cart.find(item => item.id === action.payload)
            if (item) {
                item.quantity++;
            }
        },
        decreaseProductCount: (state, action: PayloadAction<number>) => {
            const item = state.cart.find(item => item.id === action.payload)
            if (item && item.quantity >= 2) {
                item.quantity--
            }
        },
    }
})

export const { addToCart, removeFromCart, increaseProductCount, decreaseProductCount } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
