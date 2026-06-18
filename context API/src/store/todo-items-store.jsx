import { createContext } from "react"
import { useReducer } from "react";

export const TodoItemsContext = createContext({
  todoItems: [],
  addNewItems: () => {},
  deleteItem: () =>{},
});
const todoItemsReducer = (currTodoItems, action) =>{
  let newTodoItems = currTodoItems;
  if(action.type ==='NEW_ITEM'){
    
      newTodoItems = [
      ...currTodoItems,
      {
        name: action.payload.itemName,
        dueDate: action.payload.itemDueDate,
      },
    ];
  }else if(action.type ==='DELETE_ITEM'){
    newTodoItems = currTodoItems.filter((item) => item.name !== action.payload.itemName);
    
  }
  return newTodoItems ;
};
const TodoContextProvider = ({childern}) =>{
  const [todoItems ,dispatchTodoItems] = useReducer(todoItemsReducer,[]);
  
    const addNewItem = (itemName, itemDueDate) => {
      const newItemAction ={
        type : "NEW_ITEM",
        payload :{
          itemName,
          itemDueDate
        },
      };
  
      dispatchTodoItems(newItemAction);
     
    };
  
    const deleteItem= (todoItemName) => {
    
       const deleteItemAction ={
        type : "DELETE_ITEM",
        payload :{
          itemName :todoItemName,
        },
      };
      dispatchTodoItems(deleteItemAction);
    };
    return (
    <TodoItemsContext.Provider 
    value = {{ todoItems:todoItems,
      addNewItem : addNewItem,
      deleteItem: deleteItem,
    }}
    >
      {childern}
    </TodoItemsContext.Provider>
    );

};
export default TodoContextProvider;