import React from 'react';
import {Link} from 'react-router-dom'

export function Nav() {
  return (
    <header>
      <div>
          <h2>
            <Link exact to="/" >TODOS</Link>
          </h2>
      </div>
      <div>
          <h3>
            <Link exact to="/add" >Add Todo</Link>
          </h3>
      </div>
    </header>
  )
};

export default Nav;