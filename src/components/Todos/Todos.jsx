import React from "react";
import Todo from "../Todo/Todo";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./todos.css"

export function Todos({status}) {
    const stateTodo = useSelector(state => state.stateTodo)
    return (
        <div className="divTodos">
          <div className="divSpan"><span>{status}</span></div>
           {stateTodo.map(el => {
             if (el.status === status) {
               return (
              <Link to={`/ToDoList/edit/${el.id}`} className="titleTodo">
                <Todo
                  key={el.id}
                  title={el.title}
                  status={el.status}
                />
              </Link>)
            }})}
        </div>
      )
}

export default Todos;