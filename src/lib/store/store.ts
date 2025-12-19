import { configureStore } from "@reduxjs/toolkit";
import likesReducer from "./features/likeSlice";
import cartReducer from "./features/cartSlice"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";


export const store = configureStore({
  reducer: {
    likes: likesReducer,
    cart:cartReducer
  },
});

// Types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
