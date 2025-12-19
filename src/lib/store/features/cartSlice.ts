// import { recipeArr } from "@/types/RecipeTypes/Recipe";
import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";

export interface CartState {
  cartItems: string[];
}

const initialState: CartState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cartItems",
  initialState,
  reducers: {
    add: (state, action) => {
      state.cartItems.push(...action.payload)
    },
    clearCartItems:(state)=>{
        state.cartItems=[];
    }
  },
});

export const { add,clearCartItems } = cartSlice.actions;

export default cartSlice.reducer;
