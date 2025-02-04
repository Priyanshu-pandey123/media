import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import gallerySlice from "./gallerySlice";

export default configureStore({
  reducer: {
    user: userSlice,
    gallery: gallerySlice,
  },
});
