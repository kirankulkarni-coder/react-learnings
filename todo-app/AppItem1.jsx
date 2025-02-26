import { useState } from "react";

function AppItem1({ getValues }) {
  let [textInput, setTextInput] = useState("");
  let [dateInput, setDateInput] = useState("");

  const onTextChangeHandler = (event) => {
    setTextInput(event.target.value);
  };

  const onDateChangeHandler = (event) => {
    setDateInput(event.target.value);
  };

  const passValues = (event, textInput, dateInput) => {
    event.preventDefault();
    getValues(textInput, dateInput);
    setTextInput("");
    setDateInput("");
  };

  return (
    <form
      onSubmit={(event) => passValues(event, textInput, dateInput)}
      class="row items_container"
    >
      <div class="col-6">
        <input
          type="text"
          value={textInput}
          onChange={(event) => onTextChangeHandler(event)}
        ></input>
      </div>
      <div class="col-4">
        <input
          type="date"
          onChange={(event) => onDateChangeHandler(event)}
        ></input>
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
