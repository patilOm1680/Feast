import { recipeArr } from "@/types/RecipeTypes/Recipe";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface LikeState {
  items: recipeArr;
}

const initialState: LikeState = {
  items: [],
};

export const likeSlice = createSlice({
  name: "likes",
  initialState,
  reducers: {
    add: (state, action) => {
      const isPresent = state.items.filter(
        (obj) => obj.id === action.payload.id
      );
      if (isPresent.length === 0) {
        state.items.push(action.payload);
      } 
    },
    remove: (state, action) => {
      const updatedItems = state.items.filter(
        (obj) => obj.id !== action.payload.id
      );
      state.items = [...updatedItems];
    },
  },
});

export const { add,remove } = likeSlice.actions;

export default likeSlice.reducer;
