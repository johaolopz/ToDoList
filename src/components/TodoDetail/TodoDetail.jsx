import React, {useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { toInProgress, toDone, removeTodo, details } from '../../redux/actions/index';
import "./todoDetail.css"
//MATERIAL UI
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

export function TodoDetail() {
    const dispatch = useDispatch();
    let params = useParams();
    const detailTodo = useSelector(state => state.details)
    useEffect(() => {
      dispatch(details(parseInt(params.id)))
    },[]);
  return (
    <div className="detailComponentContainer">
      <div className="container">
        <span className="spanTitle"><h2 className="h2Title">{detailTodo[0].title}</h2></span>
        <div className="info">
            <div>Description: <label className="details">{detailTodo[0].description}</label></div>
            <div>Place: <label className="details">{detailTodo[0].place}</label></div>
            <div>Date: <label className="details">{detailTodo[0].date}</label></div>
        </div>
        <div className="buttons">
            <Button variant="contained" color="success" id="doneButton" onClick={() => dispatch(toDone(parseInt(params.id)))} >DONE</Button>
            <Button variant="contained" color="secondary" id="inProgressButton" onClick={() => dispatch(toInProgress(parseInt(params.id)))} >IN PROGRESS</Button>
            <Button variant="outlined" color="error" startIcon={<DeleteIcon />} id="deleteButton" onClick={() => dispatch(removeTodo(parseInt(params.id)))} >DELETE</Button>
        </div>
        <div className="divBack">
          <Link exact to="/" className="link">← Back</Link>
        </div>
      </div>
      <hr />
    </div>
  )
};

export default TodoDetail;