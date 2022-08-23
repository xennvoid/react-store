import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ProductsState = {
    burgerIsOpen: boolean;
}

const initialState: ProductsState = {
    burgerIsOpen: false,
}



const burgerSlice = createSlice({
    name: 'burger',
    initialState,
    reducers: {
        burgerClose: (state) => {
            state.burgerIsOpen = false;
        },
        burgerOpen: (state) => {
            state.burgerIsOpen = true;
        },
    },
})

export const { burgerClose, burgerOpen } = burgerSlice.actions;
export const burgerReducer = burgerSlice.reducer;