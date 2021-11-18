import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux";

export function TodoDetail() {
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
                        <button>DONE</button>
                        <button>IN PROGRESS</button>
                        <button>DELETE</button>
                    </div>
            </div>
    </div>
  )
};

export default TodoDetail;