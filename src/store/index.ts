import { configureStore } from "@reduxjs/toolkit";
import { burgerReducer } from "./slices/burgerSlice";
import { cartReducer } from "./slices/cartSlice";
import { categoriesReducer } from "./slices/categoriesSlice";
import { productReducer } from "./slices/productSlice";


export const store = configureStore({
    reducer: {
        product: productReducer,
        cart: cartReducer,
        categories: categoriesReducer,
        burger: burgerReducer
    }
})

/*store.subscribe(() => {
    const cartItems = store.getState().product.wishlist;
    localStorage.setItem("items", JSON.stringify(cartItems))
})
*/

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

