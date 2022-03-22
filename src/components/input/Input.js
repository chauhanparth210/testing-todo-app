import React, { useState } from "react";

export const Input = ({ addTodo }) => {
  const [input, setInput] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    addTodo(input);
    setInput("");
  };

  return (
    <form className="input-form" onSubmit={submitHandler}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">add todo</button>
    </form>
  );
};
