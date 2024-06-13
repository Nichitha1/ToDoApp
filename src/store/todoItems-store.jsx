import { createContext } from "react";
// import TodoItem from "../TodoItem";
import { useReducer } from "react";

export const TodoItemsContext = createContext(
  {
  todoItems : [],
  onNewItem : () => {},
  onButtonClick : () => {},
}
);

const todoItemsReducer = (currTodoItems, action) => {
  let newTodoItems = currTodoItems;
  if (action.type === "ADD_ITEM") {
    newTodoItems = [
      ...currTodoItems,
      { name: action.payload.name, dueDate: action.payload.dueDate }
    ];
  } 
  else if (action.type === "DELETE_ITEM") {
    newTodoItems = currTodoItems.filter(
      (item) => item.name !== action.payload.itemName
    );
  }
  return newTodoItems;
};

const TodoItemsContextProvider = ({children}) => {

  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  const onNewItem = (todoName, todoDate) => {
    // const updatedTodos = [...todoItems,{
    //   name : todoName,
    //   dueDate : todoDate,
    // }]
    // setTodoItems(updatedTodos);
    const onNewItemAction = {
      type : "ADD_ITEM",
      payload : {
        name : todoName,
        dueDate : todoDate,
      }
    }
    dispatchTodoItems(onNewItemAction);
  };
  const onButtonClick = (todoName) => {
    const onButtonClickAction = {
      type: "DELETE_ITEM",
      payload: {
        itemName: todoName,
      },
    };
    // const updatedTodoItems = todoItems.filter((item) => item.name !== todoName);
    // setTodoItems(updatedTodoItems);
    dispatchTodoItems(onButtonClickAction);
  };

  return (
    <TodoItemsContext.Provider
      value={{
        todoItems,
        onNewItem,
        onButtonClick,}
      }
    >
      {children}
    </TodoItemsContext.Provider>
  )
}
export default TodoItemsContextProvider;