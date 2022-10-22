import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { isNullishCoalesce } from "typescript";

export interface userState {
  userName: string;
  password: string;
  img: string;
}

const initialState: userState = {
  userName: "",
  password: "",
  img: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.userName = action.payload;
    },
  },
});

export const { login } = userSlice.actions;

export default userSlice.reducer;
