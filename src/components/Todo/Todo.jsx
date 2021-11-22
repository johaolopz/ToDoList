import React from 'react';
import "./todo.css"

export function Todo({title}) {
  return (
    <div className="divTodo">
      <h1 className="titleTodo">- {title}</h1>
    </div>
  )
};

export default Todo;