import { IoIosAdd } from "react-icons/io";
import { useRef} from "react";
function AddTodo({onNewItem}) {
  
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const handleAddButtonClick = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const  todoDueDate = dueDateElement.current.value;
    todoNameElement.current.value= "";
    dueDateElement.current.value = "";
    onNewItem(todoName, todoDueDate);
  };
  return (
    <div className="container text-center">
      <form className="row kg-row" onSubmit={handleAddButtonClick} >
        <div className="col-6">
          <input type="text"
          ref = {todoNameElement}
           placeholder="Enter Todo Here" 
        
          />
        </div>
        <div className="col-4">
          <input type="date" 
           ref = {dueDateElement}
         />
        </div>
        <div className="col-2">
          <button className="btn btn-success kg-button"
          >
            <IoIosAdd />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;