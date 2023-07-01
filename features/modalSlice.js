import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  active: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setModal: (state, action) => {
      state.active = action.payload.active;
    },
    closeModal: (state, action) => {
      state.active = action.payload.active;
    },
  },
});

export const { setModal, closeModal } = modalSlice.actions;

export const selectModal = (state) => state.modal.active;

export default modalSlice.reducer;
