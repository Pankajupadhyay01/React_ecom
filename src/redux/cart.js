import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
  },
  reducers: {

    updateCart: (state, action) => {
      state.cart = [
        ...state.cart,
        {
          ...action.payload.detail
        }
      ]
    },
    removeCart: (state, action) => {
       const removed = state.cart.filter((elem)=>elem.id!==action.payload.id)
        state.cart= removed
    }

  }
})
export const { updateCart, removeCart } = counterSlice.actions
export default counterSlice.reducer