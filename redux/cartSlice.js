import { createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";

const saveCart = (state) => {
  try {
    localStorage.setItem("cart", JSON.stringify(state));
  } catch {
    console.error("Failed to save cart");
  }
};

const loadCart = () => {
  try {
    const data = localStorage.getItem("cart");
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

const initialState = loadCart();

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existing = state.find((item) => item.id === action.payload.id);

      if (!existing) {
        state.push({ ...action.payload, quantity: 1 });
        saveCart(state);
        toast.success("Item added to cart!");
      } else {
        existing.quantity += 1;
        saveCart(state);
        toast.info(`Quantity updated (${existing.quantity})`);
      }
    },

    removeFromCart: (state, action) => {
      const updated = state.filter((item) => item.id !== action.payload);
      saveCart(updated);
      toast.error("Item removed from cart");
      return updated;
    },

    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.find((item) => item.id === id);

      if (!item) return;

      if (quantity <= 0) {
        const updated = state.filter((i) => i.id !== id);
        saveCart(updated);
        return updated;
      }

      item.quantity = quantity;
      saveCart(state);
    },

    clearCart: () => {
      localStorage.removeItem("cart");
      toast.success("Cart cleared");
      return [];
    },
  },
});

export const selectCartItems = (state) => state.cart;
export const selectCartTotal = (state) =>
  state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
export const selectCartCount = (state) =>
  state.cart.reduce((sum, item) => sum + item.quantity, 0);

export const { addToCart, removeFromCart, updateQuantity, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
