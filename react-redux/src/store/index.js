import { createStore } from "redux";

const INITIAL_COUNTER = { counter: 0, toggle: false };

const counterReducer = (store = INITIAL_COUNTER, action) => {
  if (action.type === "INCREMENT") {
    return { ...store, counter: store.counter + Number(action.payload) };
  } else if (action.type === "DECREMENT") {
    return { ...store, counter: store.counter + Number(action.payload) };
  } else if (action.type === "ADD") {
    return { ...store, counter: store.counter + Number(action.payload) };
  } else if (action.type === "SUBTRACT") {
    return { ...store, counter: store.counter - Number(action.payload) };
  } else if (action.type === "TOGGLE") {
    return { ...store, toggle: !store.toggle };
  }
  return store;
};

const store = createStore(counterReducer);

export default store;
