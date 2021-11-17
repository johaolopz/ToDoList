import React from "react";
import Todo from "../Todo/Todo";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export function Todos({status}) {
    const stateTodo = useSelector(state => state.stateTodo)
    return (
        <div>
          <span>{status}</span>
           {stateTodo.map(el => {
             if (el.status === status) {
               return (
              <Link to={`/edit/${el.id}`}>
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