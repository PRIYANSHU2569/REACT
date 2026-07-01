import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";

import WelcomeMessage from "./components/WelcomeMessage";
import { TodoContextProvider } from "./store/todo-items-store";

function App() {
  <TodoContextProvider>
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <WelcomeMessage />
      <TodoItems></TodoItems>
    </center>
  </TodoContextProvider>;
}

export default App;
