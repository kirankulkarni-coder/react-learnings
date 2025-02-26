import AppName from "../AppName";
import AppItem1 from "../AppItem1";
import Items from "./Items";
import "./App.css";
import { useState } from "react";

function App() {
  let [items, setItems] = useState([]);

  const getValues = (textInput, dateInput) => {
    let newItems = [...items, { task: textInput, date: dateInput }];
    setItems(newItems);
  };

  const removeValue = (task) => {
    let newItems = [...items];
    newItems = newItems.filter((item) => item.task != task);
    setItems(newItems);
  };

  return (
    <div>
      <AppName class="name"></AppName>
      <div class="appItems">
        <AppItem1
          getValues={(textInput, dateInput) => getValues(textInput, dateInput)}
        ></AppItem1>
        <Items items={items} removeValue={(task) => removeValue(task)}></Items>
      </div>
    </div>
  );
}

export default App;
