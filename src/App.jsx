import AppName from "./AppName";
import AddTodo from "./AddTodo";
import TodoItems from "./TodoItems";
import "./App.css";
import ErrorMessage from "./ErrorMessage";
// import { useState } from "react";
// import { useReducer } from "react";
import TodoItemsContextProvider from "./store/todoItems-store.jsx";


function App() {
  // // let [todoItems, setTodoItems] = useState([]);
  // const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  // const onNewItem = (todoName, todoDate) => {
  //   // const updatedTodos = [...todoItems,{
  //   //   name : todoName,
  //   //   dueDate : todoDate,
  //   // }]
  //   // setTodoItems(updatedTodos);
  //   const onNewItemAction = {
  //     type : "ADD_ITEM",
  //     payload : {
  //       name : todoName,
  //       dueDate : todoDate,
  //     }
  //   }
  //   dispatchTodoItems(onNewItemAction);
  // };
  // const onButtonClick = (todoName) => {
  //   const onButtonClickAction = {
  //     type: "DELETE_ITEM",
  //     payload: {
  //       itemName: todoName,
  //     },
  //   };
  //   // const updatedTodoItems = todoItems.filter((item) => item.name !== todoName);
  //   // setTodoItems(updatedTodoItems);
  //   dispatchTodoItems(onButtonClickAction);
  // };

  return (
    <TodoItemsContextProvider>
      <center className="todo-container">
        <AppName />
        <AddTodo/>
        <ErrorMessage />
        <TodoItems></TodoItems>
      </center>
    </TodoItemsContextProvider>
  );
}

export default App;

// useReducer
// if state reducing becomes lengthy and tough!
// specially for complex state logic!
// it offers more control over state operations compared to useSate, especially for complex state logic!
// it involoves in 2 main components : 1.reducer 2. action
// who ever wanna change , want an action !

