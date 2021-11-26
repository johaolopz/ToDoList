import React from 'react';
import "./todo.css"

export function Todo({title, status}) {
  let emoji = ""
  if (status === "Todo") emoji = "📌"
  if (status === "InProgress") emoji = "⚙"
  if (status === "Done") emoji = "✔"
  return (
    <div className="divTodoCard">
      <p className="emoji">{emoji}</p><h1 className="titleTodo"> {title}</h1>
    </div>
  )
};

export default Todo;