import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    total: 0,
  },

  reducers: {
    add: (state, action) => {
      // IMMMER
      // Mutable => Immutable
      const Product = state.cart.find((item) => item.id === action.payload.id);
      if (Product) {
        exitsProduct.amount += 1;
      } else {
        state.cart.push(action.payload);
      }
      state.total = state.cart.reduce(
        (accu, item) => accu + item.saleOffPrice * item.amount,
        0
      );
    },
    increase: (state, action) => {
      let currentItem = state.cart.find((c) => c.id == action.payload);
      currentItem.amount++;
      state.total = state.cart.reduce(
        (accu, item) => accu + item.saleOffPrice * item.amount,
        0
      );
    },
    decrease: (state, action) => {
      let currentItem = state.cart.find((c) => c.id == action.payload);
      currentItem.amount--;
      if (currentItem.amount == 0) {
        const confirm = window.confirm("Bạn có chắc muốn xóa");
        if (confirm) {
          const removeItem = state.cart.filter(
            (item) => item.id !== action.payload
          );
          state.cart = [...removeItem];
        } else {
          currentItem.amount = 1;
        }
      }
      state.total = state.cart.reduce(
        (accu, item) => accu + item.saleOffPrice * item.amount,
        0
      );
    },
  },
});

export default cartSlice;
