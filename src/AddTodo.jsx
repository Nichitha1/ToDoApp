import { useContext, useState} from "react";
import { useRef } from "react";
import {TodoItemsContext} from "./store/todoItems-store.jsx";

function AddTodo() {
  const todoNameElement = useRef("");
  const dueDateElement = useRef("");

  let {onNewItem} = useContext(TodoItemsContext);
  // const [todoName, setTodoName] = useState();
  // const [todoDate, setTodoDate] = useState();

  // const handleNameChange = (event) =>{
  //   setTodoName(event.target.value);
  // }

  // const handleDateChange = (event) => {
  //   setTodoDate(event.target.value);
  // }

  const handleAddTodo = (event) => {
    event.preventDefault();
    let todoName = todoNameElement.current.value;
    let todoDate = dueDateElement.current.value;
    onNewItem(todoName, todoDate);
    // setTodoDate("");
    // setTodoName("");
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
  };

  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6" style={{"background-color" : "white","border-radius" : "4px","height" : "40px"}}>
          <input
            type="text"
            placeholder="Enter Todo Here"
            className="todoItem1"
            style={{"background-color" : "white","border":"none"}}
            ref={todoNameElement}
          />
        </div>
        <div className="col-4" >
          <input type="date" className="todoDate" 
          style={{"background-color" : "white","border-radius" : "4px","height" : "40px"}}
          // value={todoDate}
          // onChange={handleDateChange}
          ref={dueDateElement} 
          />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success kg-button"
            onClick={handleAddTodo}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
