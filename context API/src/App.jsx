import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
import { TodoItemsContext } from "./store/todo-items-store";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const addNewItem = (itemName, itemDueDate) => {
    const newTodoItems = [
      ...todoItems,
      {
        name: itemName,
        dueDate: itemDueDate,
      },
    ];
    setTodoItems(newTodoItems);
  };

  const deleteItem= (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
    
  }


  return (
    <TodoItemsContext.Provider value = {{ todoItems:todoItems,
      addNewItem : addNewItem,
      deleteItem: deleteItem,
    }}>

    <center className="todo-container">
      <AppName />
      <AddTodo  />
      <WelcomeMessage/>
      <TodoItems ></TodoItems>
    </center>
    </TodoItemsContext.Provider>
  );
}

export default App;