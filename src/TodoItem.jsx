import { RiDeleteBinLine } from "react-icons/ri";

function TodoItem({ todoName, todoDate ,onButtonClick}) {
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6" style={{"background-color" : "rgb(200, 200, 200)","border":"3px solid rgb(48, 48, 48)","border-radius":"12px"}}>{todoName}</div>
        <div className="col-4" style={{"background-color" : "rgb(200, 200, 200)","border":"3px solid rgb(48, 48, 48)","border-radius":"12px"}}>{todoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger kg-button" onClick={()=>{onButtonClick(todoName)}}>
          <RiDeleteBinLine />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;