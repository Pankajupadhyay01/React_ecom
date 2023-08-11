import { configureStore } from '@reduxjs/toolkit'
import useReducer from './productSlice'
import cartReducer from './cart'
export default configureStore({
    reducer: {
        user: useReducer,
        cart: cartReducer
    }
})