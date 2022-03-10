import React from "react";

export const Todos = ({ todos }) => {
  return (
    <ul>
      {(todos || []).map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
    </ul>
  );
};
