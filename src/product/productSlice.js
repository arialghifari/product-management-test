import { createSlice } from '@reduxjs/toolkit'

export const productSlice = createSlice({
  name: 'products',
  initialState: [
    {
      id: 1,
      nama: 'Iphone 13',
      harga: 12000000,
      stok: 10,
      createdDate: '11/08/2024',
    },
    {
      id: 2,
      nama: 'Laptop Asus X231',
      harga: 20000000,
      stok: 4,
      createdDate: '17/08/2024',
    },
    {
      id: 3,
      nama: 'Samsung Fold 3',
      harga: 16000000,
      stok: 6,
      createdDate: '02/09/2024',
    },
  ],
  reducers: {
    addProduct: (state, action) => {
      state.push(action.payload)
    },
    updateProduct: (state, action) => {
      const index = state.findIndex(
        (product) => product.id === action.payload.id
      )
      state[index] = action.payload
      return state
    },
    deleteProduct: (state, action) => {
      return state.filter((product) => product.id !== action.payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { addProduct, updateProduct, deleteProduct } = productSlice.actions

export default productSlice.reducer
