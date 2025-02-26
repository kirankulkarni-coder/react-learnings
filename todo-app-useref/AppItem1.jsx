import { useRef } from "react";

function AppItem1({ getValues }) {
  const textInput = useRef("");
  const dateInput = useRef("");

  const passValues = (event) => {
    event.preventDefault();
    getValues(textInput.current.value, dateInput.current.value);
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
