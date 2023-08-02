import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'user',
  initialState: {
    product: [],
    err: false,
    loading: false,
    menu:false
  },
  reducers: {
    updatemenu:(state)=>{
        state.menu = !state.menu
        console.log(state.menu);
    },
    updateStart: (state) => {
      state.loading = true
    },
    updateProduct: (state, action) => {
      state.loading = false
      state.product = action.payload.products
    },
    updateErr: (state) => {
      state.loading = false
      state.err = true
    }
  }
})

export const { updateStart, updateProduct, updateErr, updatemenu } = counterSlice.actions
export default counterSlice.reducer