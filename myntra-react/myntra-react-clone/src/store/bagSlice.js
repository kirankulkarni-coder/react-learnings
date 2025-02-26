import { createSlice } from "@reduxjs/toolkit";

const bagSlice = createSlice({
  name: "bag",
  initialState: { bag: [] },
  reducers: {
    addToBag: (state, action) => {
      console.log(action.payload);
      state.bag.push(action.payload); // Modify the state directly
    },
    removeFromBag: (state, action) => {
      console.log(action.payload);
      state.bag = state.bag.filter((item) => item.id !== action.payload.id);
    },
  },
});

export default bagSlice;

export const bagActions = bagSlice.actions;
