import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeTab: "",
};

const tabSlice = createSlice({
  name: "tab",
  initialState,
  reducers: {
    setTabs: (state, action) => {
      state.activeTab = action.payload.activeTab;
    },
  },
});

export const { setTabs } = tabSlice.actions;

export const selectTab = (state) => state.tab.activeTab;

export default tabSlice.reducer;
