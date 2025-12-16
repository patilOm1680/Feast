
import { recipeArr } from '@/types/RecipeTypes/Recipe'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface LikeState {
  items: recipeArr
}

const initialState: LikeState = {
  items: [],
}

export const likeSlice = createSlice({
  name: 'likes',
  initialState,
  reducers: {
    add:(state,action)=>{
        state.items.push(action.payload);
    }
  },
})

export const { add } = likeSlice.actions

export default likeSlice.reducer