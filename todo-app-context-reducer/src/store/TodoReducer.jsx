export const TodoReducer = (todoItems, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [
        ...todoItems,
        { task: action.payload.task, date: action.payload.date },
      ];
    case "DELETE_ITEM":
      let newItems = [...todoItems];
      return newItems.filter((item) => item.task != action.payload.task);
  }
};
