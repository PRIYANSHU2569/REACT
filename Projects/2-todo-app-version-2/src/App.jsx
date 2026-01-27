import AppName from './components/AppName.jsx';
import AddTodo from './components/AddTodo.jsx';
import TodoItem from './components/TodoItem.jsx';
import TodoItem2 from './components/TodoItem2.jsx';
import './App.css';


function App() {
  return (
    <center class="todo-container">
      <AppName />
      <AddTodo />
      <div className="items-container">
      <TodoItem/>
      <TodoItem2/>
      </div>
     
    </center>
  );
}

export default App;
