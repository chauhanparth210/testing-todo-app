import React from "react";

export const Todos = ({ todos, removeTodo }) => {
  return (
    <ul className="todos">
      {(todos || []).map((todo, index) => (
        <li key={index}>
          {todo}
          <button
            style={{
              marginLeft: "8px",
            }}
            onClick={() => removeTodo(todo)}
          >
            x
          </button>
        </li>
      ))}
    </ul>
  );
};
