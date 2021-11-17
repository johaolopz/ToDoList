import React from "react";
import Todos  from "../Todos/Todos"

function Home() {
    return (
        <div>
      <div>
        <Todos status="Todo" />
      </div>
      <div>
        <Todos status="InProgress" />
      </div>
      <div>
        <Todos status="Done" />
      </div>
    </div>
    );
}

export default Home;