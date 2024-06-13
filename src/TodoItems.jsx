import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
import { useContext } from "react";
import {TodoItemsContext} from "./store/todoItems-store.jsx";
 
const TodoItems = () => {
  const {todoItems,onButtonClick} = useContext(TodoItemsContext);
  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        <TodoItem
          todoDate={item.dueDate}
          todoName={item.name}
          onButtonClick={onButtonClick}
          key={item.name}
        ></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
