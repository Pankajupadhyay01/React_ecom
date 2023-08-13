import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
  },
  reducers: {

    // add/remove to cart function start 

    updateCart: (state, action) => {
      state.cart = [
        ...state.cart,
        {
          ...action.payload
        }
      ]
    },
    removeCart: (state, action) => {
      const removed = state.cart.filter((elem) => elem.detail.id !== action.payload.id)
      state.cart = removed
    },

    // add/remove to cart function  Ended

    // quantity increment decrement function 

    setInc: (state, action) => {
      state.cart.filter((elem) => {
        if (elem.detail.id === action.payload.id) {
          { elem.qyt < 5 ? elem.qyt = elem.qyt + 1 : elem.qyt }
        }
      })
    },

    setdec: (state, action) => {
      state.cart.filter((elem) => {
        if (elem.detail.id === action.payload.id) {
          { elem.qyt > 1 ? elem.qyt = elem.qyt - 1 : elem.qyt }
        }
      })
    }
    // quantity increment decrement function ended

  }
})
export const { updateCart, removeCart, setInc, setdec } = counterSlice.actions
export default counterSlice.reducer