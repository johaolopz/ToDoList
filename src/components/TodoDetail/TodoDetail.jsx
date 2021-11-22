import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { toInProgress, toDone, removeTodo } from '../../redux/actions/index';
import "./todoDetail.css"

export function TodoDetail() {
    const dispatch = useDispatch();
    let params = useParams();
    const stateTodo = useSelector(state => state.stateTodo)
    let details = stateTodo[params.id-1];
  return (
    <div>
      <div className="container">
          <h2>{details.title}</h2>
          <div className="info">
              <div>Description: {details.description}</div>
              <div>Place: {details.place}</div>
              <div>Date: {details.date}</div>
          </div>
          <div className="buttons">
              <button onClick={() => dispatch(toDone(parseInt(params.id)))} >DONE</button>
              <button onClick={() => dispatch(toInProgress(parseInt(params.id)))} >IN PROGRESS</button>
              <button onClick={() => dispatch(removeTodo(parseInt(params.id)))} >DELETE</button>
          </div>
          <div>
            <Link exact to="/" className="link">Home</Link>
          </div>
        </div>
    </div>
  )
};

export default TodoDetail;