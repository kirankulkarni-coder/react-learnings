import AppName from "./AppName";
import AppItem1 from "./AppItem1";
import Items from "./Items";
import "./App.css";
import { useContext, useState } from "react";
import { TodoItemsContext } from "./store/todoitemsContext";

function App() {
  let [todoItemsNew, setItems] = useState([]);

  const addNewItem = (textInput, dateInput) => {
    setItems((currentValue) => [
      ...currentValue,
      { task: textInput, date: dateInput },
    ]);
  };

  const deleteItem = (task) => {
    setItems((currentValue) => {
      let newItems = [...currentValue];
      newItems = newItems.filter((item) => item.task != task);
      return newItems;
    });
  };

  return (
    <TodoItemsContext.Provider
      value={{
        todoItems: todoItemsNew,
        addNewItem: addNewItem,
        deleteItem: deleteItem,
      }}
    >
      <div>
        <AppName class="name"></AppName>
        <div class="appItems">
          <AppItem1></AppItem1>
          <Items></Items>
        </div>
      </div>
    </TodoItemsContext.Provider>
  );
}

export default App;
