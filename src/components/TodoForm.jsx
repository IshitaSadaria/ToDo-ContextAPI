import React, { useState } from "react";
import { useTodo } from "../contexts";

const TodoForm = () => {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();
    addTodo({ todo, completed: false });
    setTodo("");
    /*
         this is used to add a new todo with the todo and completed value. Why todo.id is not added is because the id is generated using the Date.now() function in the App.js file 
         and why only todo is passed in object is because if the key and value are the same, you can pass only the key as per new syntax of react
    */
  };

  return (
    <form onSubmit={add} className="flex">
      <input
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
};

export default TodoForm;
