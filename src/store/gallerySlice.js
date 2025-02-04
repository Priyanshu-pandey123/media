import { createSlice } from "@reduxjs/toolkit";
const gallerySlice = createSlice({
  name: "gallery",
  initialState: {
    isVideo: false,
    tab: "",
  },
  reducers: {
    isVideoOpen: (state, action) => {
      console.log(state, action);
    },
    currentTab: (state, action) => {
      console.log(state, action);
      state.tab = action.payload;
    },
  },
});

export const { isVideoOpen, currentTab } = gallerySlice.actions;

export default gallerySlice.reducer;
