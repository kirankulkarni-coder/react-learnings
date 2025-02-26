import { useContext } from "react";
import Styles from "./Items.module.css";
import { TodoItemsContext } from "./store/todoitemsContext";

function Items() {
  const { todoItems, dispatch } = useContext(TodoItemsContext);

  return todoItems.map((item) => (
    <div className={`row ${Styles.items_container}`}>
      <div class="col-6">{item.task}</div>
      <div class="col-4">{item.date}</div>
      <div class="col-2">
        <button
          type="button"
          onClick={() =>
            dispatch({ type: "DELETE_ITEM", payload: { task: item.task } })
          }
          class="btn btn-danger button"
        >
          Delete
        </button>
      </div>
    </div>
  ));
}

export default Items;
