import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cart-slice";
// import dummy from "./slices/cart-slice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    // dummy: cartReducer,
  },
});

export default store;
