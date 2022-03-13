import React from "react";

export const Todos = ({ todos }) => {
  return (
    <ul className="todos">
      {(todos || []).map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
    </ul>
  );
};
