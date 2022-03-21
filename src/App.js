import React, { useState } from "react";
import { Input } from "./components/Input";
import { Todos } from "./components/Todos";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const removeTodo = (todo) => {
    setTodos((prevTodos) => prevTodos.filter((item) => item !== todo));
  };

  return (
    <div className="todo-app">
      <Input addTodo={addTodo} />
      <Todos todos={todos} removeTodo={removeTodo} />
    </div>
  );
}

export default App;
