import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  user: {},
  initialState: {},
  reducers: {
    addUser: (action, payload) => {},
  },
  removeUser: (action, payload) => {},
});

// Action creators are generated for each case reducer function
export const { addUser, removeUser } = counterSlice.actions;

export default userSlice.reducer;
