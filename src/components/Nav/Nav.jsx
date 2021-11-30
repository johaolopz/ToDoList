import React from 'react';
import {Link} from 'react-router-dom'
import "./nav.css"
import buttonPlus from "../../images/buttonPlus.svg"
import words from "../../images/words.svg"
import todoListIcon from "../../images/todoListIcon.svg"
import sign from "../../images/sign.svg"

export function Nav() {
  return (
    <div className="divNav">
      <header>
        <div className="divH2">
            <h2 className="homeIcon">
              <Link exact to="/ToDoList/" className="link1">ToDO LIST</Link>
            </h2>
        </div>
        <div className="sign">
          <img src={sign} alt="Not Found" id="personalSign"/>
        </div>
        <div className="buttonContainer">
          <div className="divButtonRight">
            <img src={words} alt="Not Found" id="words" />
            <Link exact to="/ToDoList/add" className="buttonPlusContainerRight" >
                <img src={buttonPlus} alt="Not Found" id="buttonPlus" />
            </Link>
          </div>
        </div>
      </header>
      <div className="iconList">
        <img src={todoListIcon} alt="Not Found" id="todoListIcon" />
      </div>
    </div>
  )
};

export default Nav;