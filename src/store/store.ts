import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./Auth/userSlice";

export const store = configureStore({
  reducer: { name: UserReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
