import React, {useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { toInProgress, toDone, removeTodo, details } from '../../redux/actions/index';
import "./todoDetail.css"

export function TodoDetail() {
    const dispatch = useDispatch();
    let params = useParams();
    const detailTodo = useSelector(state => state.details)
    useEffect(() => {
      dispatch(details(parseInt(params.id)))
    },[]);
  return (
    <div>
      <div className="container">
          <h2>{detailTodo[0].title}</h2>
          <div className="info">
              <div>Description: {detailTodo[0].description}</div>
              <div>Place: {detailTodo[0].place}</div>
              <div>Date: {detailTodo[0].date}</div>
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