import { useContext, useRef } from "react";
import { TodoItemsContext } from "./store/todoitemsContext";

function AppItem1() {
  const textInput = useRef("");
  const dateInput = useRef("");
  const { dispatch } = useContext(TodoItemsContext);

  const passValues = (event) => {
    event.preventDefault();
    dispatch({
      type: "ADD_ITEM",
      payload: { task: textInput.current.value, date: dateInput.current.value },
    });
    textInput.current.value = "";
    dateInput.current.value = "";
  };

  return (
    <form onSubmit={passValues} class="row items_container">
      <div class="col-6">
        <input type="text" ref={textInput}></input>
      </div>
      <div class="col-4">
        <input type="date" ref={dateInput}></input>
      </div>
      <div class="col-2">
        <button type="submit" class="btn btn-success button">
          Add
        </button>
      </div>
    </form>
  );
}

export default AppItem1;
