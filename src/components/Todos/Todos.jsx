import React from "react";
import Todo from "../Todo/Todo";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./todos.css"

export function Todos({status}) {
    const stateTodo = useSelector(state => state.stateTodo)
    return (
        <div className="divTodos">
          <span><p>{status}</p></span>
           {stateTodo.map(el => {
             if (el.status === status) {
               return (
              <Link to={`/edit/${el.id}`} className="titleTodo">
                <Todo
                  key={el.id}
                  title={el.title}
                />
              </Link>)
            }})}
        </div>
      )
}

export default Todos;