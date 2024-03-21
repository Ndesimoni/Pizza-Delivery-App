import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItems(state, action) {
      // add new item to the cart
      state.cart.push(action.payload);
    },
    deleteItems(state, action) {
      // this finds the items and  returns all the elements except the one which matches the action.payload we just passed in
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemsQuantity(state, action) {
      // this is for incrementing the quantity
      const increment = state.cart.find(
        (item) => item.pizzaId === action.payload
      );
      increment.quantity++;
      //   this is for checking the total quantity when left after decrement
      increment.totalPrice = increment.quantity * increment.unitPrice;
    },
    decreaseItemsQuantity(state, action) {
      // this is for decrementing the quantity
      const decrement = state.cart.find(
        (item) => item.pizzaId === action.payload
      );
      decrement.quantity--;
      //   this is for checking the total quantity when left after decrement
      decrement.totalPrice = decrement.quantity * decrement.unitPrice;
      if (decrement.quantity === 0)
        cartSlice.caseReducers.deleteItems(state, action);
    },
    clearItems(state) {
      state.cart = [];
    },
  },
});

// this will be use for dispatching our actions
export const {
  addItems,
  deleteItems,
  increaseItemsQuantity,
  decreaseItemsQuantity,
  clearItems,
} = cartSlice.actions;

// this will be used for creating our store
export default cartSlice.reducer;

export const getCart = (state) => state.cart.cart;

export const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);

// export const getCurrentQuantityById = (id) => (state) =>
//   state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;

export function getCurrentQuantityById(id) {
  return function (state) {
    return state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;
  };
}
