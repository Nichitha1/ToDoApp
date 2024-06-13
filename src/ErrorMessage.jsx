import { useContext } from "react";
import {TodoItemsContext} from "./store/todoItems-store.jsx";

function ErrorMessage() {
  const {todoItems} = useContext(TodoItemsContext);
  return (
    todoItems.length === 0 && <div className="fw-bolder" style={{color : "whitesmoke"}}>Enjoy the Day!</div>
  );
}
export default ErrorMessage;
