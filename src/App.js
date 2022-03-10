import React, { useState } from "react";
import { Input } from "./components/Input";
import { Todos } from "./components/Todos";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  return (
    <>
      <Input addTodo={addTodo} />
      <Todos todos={todos} />
    </>
  );
}

export default App;
