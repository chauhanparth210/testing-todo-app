import React, { useState } from "react";
import { Input } from "./components/Input";
import { Todos } from "./components/Todos";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  return (
    <div className="todo-app">
      <Input addTodo={addTodo} />
      <Todos todos={todos} />
    </div>
  );
}

export default App;
