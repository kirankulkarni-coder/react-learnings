const redux = require("redux");

const INITIAL_VALUE = {
  counter:0
}

const reducer = (store = INITIAL_VALUE, action) => {
  let newStore = store;
  if(action.type == 'INCREMENT'){
    newStore.counter = store.counter + action.payload.counter;
    return newStore;
  }
  console.log(newStore);
return newStore;
}


const store = redux.createStore(reducer);


const subscriber = () => {
  const state = store.getState();
  console.log("state--->",state);
  return state;
}

store.subscribe(subscriber);


store.dispatch({
  type:"INCREMENT",
  payload: {
    counter:7
  }
})
