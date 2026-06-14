import { IoIosAdd } from "react-icons/io";
import { useState } from "react";
function AddTodo({onNewItem}) {
  const [todoName, setTodoName] = useState("");
  const [todoDueDate, setTodoDueDate] = useState("");

  const handleTodoNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleTodoDueDateChange = (event) => {
    setTodoDueDate(event.target.value);
  };

  const handleAddButtonClick = () => {
    onNewItem(todoName, todoDueDate);
    setTodoName("");
    setTodoDueDate("");
  };
  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input type="text" placeholder="Enter Todo Here" 
          value={todoName}
          onChange ={handleTodoNameChange} />
        </div>
        <div className="col-4">
          <input type="date" value={todoDueDate} onChange = {handleTodoDueDateChange} />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success kg-button"
          onClick={handleAddButtonClick}
          >
            <IoIosAdd />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;