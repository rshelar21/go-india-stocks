import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "../features/modalSlice";
import tabSlice from "../features/tabSlice";

export default configureStore({
  reducer: {
    modal: modalSlice,
    tab: tabSlice,
  },
});
