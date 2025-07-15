import { configureStore } from "@reduxjs/toolkit";
import cartSliceReducers from '../slices/cartslice'
const CartStore = configureStore({
  reducer:{
          cartslice:cartSliceReducers
  }
})

export default CartStore; // to use in provider to ensure which component can use this store