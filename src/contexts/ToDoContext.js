import { useContext, createContext } from "react";

export const ToDoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "Todo Task",
            completed: false
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (todo, id) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}

})

export const useTodo = () => {
    return useContext(ToDoContext)
}

export const TodoProvider = ToDoContext.Provider





//Notes
/* 
- We are creating a new context called ToDoContext using createContext from react.
- We are creating a custom hook called useTodo that returns the context value.
- We are creating a new component called TodoProvider that wraps the children with the context provider.
*/