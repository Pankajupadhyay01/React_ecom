import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [], 
  },
  reducers: {
     
    updateCart: (state, action) => {
        state.cart.push(action.payload)
        console.log(state.cart);
    },
    
  }
})
export const { updateCart } = counterSlice.actions
export default counterSlice.reducer