// Redux Import
import { createSlice } from "@reduxjs/toolkit";

// Interface Import
import { IUser } from "@/types/Interfaces/user.interface";

const initialState: {
  user: IUser | null;
  token: string | null;
} = {
  user: null,
  token: null,
};

const authenticationSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    updateUser: (state, action) => {
      state.user = action.payload;
    },
    removeUser: (state) => {
      state.user = null;
      state.token = null;
    }
  },
});

export const { loginSuccess, updateUser, removeUser } = authenticationSlice.actions;

export default authenticationSlice.reducer;
