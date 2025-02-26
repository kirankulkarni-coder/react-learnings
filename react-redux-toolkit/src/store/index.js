import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    counterValue: 0,
  },
  reducers: {
    incrementCounter: (state, action) => {
      state.counterValue += 1;
    },
    decrementCounter: (state, action) => {
      state.counterValue += 1;
    },
    addCounter: (state, action) => {
      state.counterValue += Number(action.payload);
    },
    subtractCounter: (state, action) => {
      state.counterValue += Number(action.payload);
    },
  },
});

const toggleSlice = createSlice({
  name: "toggle",
  initialState: {
    toggleValue: 0,
  },
  reducers: {
    toggle: (state, action) => {
      state.toggleValue = !state.toggleValue;
    },
  },
});

const store = configureStore({
  reducer: { counter: counterSlice.reducer, toggle: toggleSlice.reducer },
});

export const {
  incrementCounter,
  decrementCounter,
  addCounter,
  subtractCounter,
} = counterSlice.actions;

export const { toggle } = toggleSlice.actions;

export default store;

// const INITIAL_COUNTER = { counter: 0, toggle: false };

// const counterReducer = (store = INITIAL_COUNTER, action) => {
//   if (action.type === "INCREMENT") {
//     return { ...store, counter: store.counter + Number(action.payload) };
//   } else if (action.type === "DECREMENT") {
//     return { ...store, counter: store.counter + Number(action.payload) };
//   } else if (action.type === "ADD") {
//     return { ...store, counter: store.counter + Number(action.payload) };
//   } else if (action.type === "SUBTRACT") {
//     return { ...store, counter: store.counter - Number(action.payload) };
//   } else if (action.type === "TOGGLE") {
//     return { ...store, toggle: !store.toggle };
//   }
//   return store;
// };
