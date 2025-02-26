import { useReducer } from "react";
import { TodoReducer } from "./TodoReducer";
import { TodoItemsContext } from "./todoitemsContext";

const TodoProviderComponent = ({ children }) => {
  const [todoItems, dispatch] = useReducer(TodoReducer, []);

  return (
    <TodoItemsContext.Provider value={{ todoItems, dispatch }}>
      {children}
    </TodoItemsContext.Provider>
  );
};

export default TodoProviderComponent;
