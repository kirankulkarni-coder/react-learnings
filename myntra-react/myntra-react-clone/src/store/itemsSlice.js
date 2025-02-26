import { createSlice } from "@reduxjs/toolkit";

const itemsSlice = createSlice({
  name: "items",
  initialState: { items: [] },
  reducers: {
    addInitialState: (state, action) => {
      console.log(action.payload);
      return action.payload;
    },
  },
});

export default itemsSlice;

export const itemsActions = itemsSlice.actions;
