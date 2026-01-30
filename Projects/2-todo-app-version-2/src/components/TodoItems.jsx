import TodoItem from "./TodoItem.jsx";


const TodoItems = ({todoItems}) => {
  return (
    <div className="items-container">
      <TodoItem todoDate="25/12/2023" todoitem="Go to college">
      </TodoItem>
      <TodoItem todoDate="24/12/2023" todoitem="Buy Milk"></TodoItem>
      </div>
  )
}
export default TodoItems;