import AppName from './components/AppName.jsx';
import AddTodo from './components/AddTodo.jsx';
import TodoItems from './components/TodoItems.jsx';



function App() {
   const todoItem=[ 
    {todoitem: "Go to college", todoDate: "25/12/2023"},

    {todoitem: "Buy Milk", todoDate: "24/12/2023"}
   ];
  return (
    <center class="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems />
     
    </center>
  );
}

export default App;
