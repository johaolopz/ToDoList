import React from "react";
import Todos  from "../Todos/Todos"
import "./home.css"

function Home() {
    return (
        <div className="todosContainer">
          <div className="divTodo">
            <Todos status="Todo" />
          </div>
          <div className="divInProgress">
            <Todos status="InProgress" />
          </div>
          <div className="divDone">
            <Todos status="Done" />
          </div>
        </div>
    );
}

export default Home;