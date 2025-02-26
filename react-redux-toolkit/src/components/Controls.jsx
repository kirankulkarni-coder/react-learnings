import { useRef } from "react";
import { useDispatch } from "react-redux";
import {
  incrementCounter,
  decrementCounter,
  addCounter,
  subtractCounter,
  toggle,
} from "../store";

const Controls = () => {
  const dispatch = useDispatch();
  const number = useRef();

  const onIncrementHandler = () => {
    dispatch(incrementCounter());
  };

  const onDecrementHandler = () => {
    dispatch(decrementCounter());
  };

  const onClickAdd = () => {
    dispatch(addCounter(number.current.value));
  };

  const onClickSubtract = () => {
    dispatch(subtractCounter(number.current.value));
  };

  const onClickToggle = () => {
    dispatch(toggle());
  };

  return (
    <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
      <button
        onClick={() => {
          onIncrementHandler();
        }}
        type="button"
        className="btn btn-primary btn-lg px-4 gap-3"
      >
        +
      </button>
      <button
        onClick={() => {
          onDecrementHandler();
        }}
        type="button"
        className="btn btn-outline-secondary btn-lg px-4"
      >
        -
      </button>

      <div class="input-group mb-3">
        <input
          ref={number}
          className="form-control"
          placeholder="Enter Number"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
          type="number"
        />
        <button onClick={onClickAdd} type="button" class="btn btn-success">
          Add
        </button>
        <button onClick={onClickSubtract} type="button" class="btn btn-danger">
          subtract
        </button>
        <button onClick={onClickToggle} type="button" class="btn btn-warning">
          Toggle
        </button>
      </div>
    </div>
  );
};

export default Controls;
