//cerate slice mehod
//initilize initial state
//slice ->name, mention initial state,actions

import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      console.log(action);
      state.push(action.payload);
    },
    removedFromCart(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});
export const { addToCart, removedFromCart } = cartSlice.actions;

export default cartSlice.reducer;
