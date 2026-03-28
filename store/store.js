import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../redux/cartSlice";

const loadState = () => {
  try {
    const data = localStorage.getItem("cart");
    return {
      cart: data ? JSON.parse(data) : [],
    };
  } catch (error) {
    return {
      cart: [],
    };
  }
};

export const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
  preloadedState: loadState(),
});

store.subscribe(() => {
  try {
    const state = store.getState();
    localStorage.setItem("cart", JSON.stringify(state.cart));
  } catch (error) {}
});
