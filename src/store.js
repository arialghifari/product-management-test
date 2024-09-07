import { configureStore } from '@reduxjs/toolkit'
import productReducer from './product/productSlice'

export default configureStore({
  reducer: {
    products: productReducer,
  },
})
