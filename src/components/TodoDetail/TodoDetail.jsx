import React, {useEffect, Fragment, useState} from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { toInProgress, toDone, removeTodo, details } from '../../redux/actions/index';
import "./todoDetail.css"
//MATERIAL UI
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
//SWEETALERT
import swal from "sweetalert"

export function TodoDetail() {
    const dispatch = useDispatch();
    let params = useParams();
    const detailTodo = useSelector(state => state.details)
    useEffect(() => {
      dispatch(details(parseInt(params.id)))
    },[]);
    const [redirect, setRedirect] = useState(false)

    function dispatcherDone(){
      dispatch(toDone(parseInt(params.id)));
      swal("Done!!!", "Congrats. Good Job!", "success")
      .then(() => setRedirect(true));
    }

    function dispatcherInProgress(){
      dispatch(toInProgress(parseInt(params.id)))
      swal("Ready!!!", "Your ToDO is in progress!", "success")
      .then(() => setRedirect(true));
    }

    function dispatcherRemove(){
      swal({
        title: "Are you sure?",
        text: "Once deleted, you won't be able to get it back!",
        icon: "warning",
        buttons: {
          yes: true,
          cancel: "No",
        },
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          dispatch(removeTodo(parseInt(params.id)))
          swal("Your ToDO has been deleted!", {
            icon: "success",
          });
          setRedirect(true)
        }
      });
    }

  return (
    <Fragment>
        {(redirect) && <Navigate to="/ToDoList/" />}
        <div className="detailComponentContainer">
          <div className="container">
            <span className="spanTitle"><h2 className="h2Title">{detailTodo[0].title}</h2></span>
            <div className="info">
                <div>Description: <label className="details">{detailTodo[0].description}</label></div>
                <div>Place: <label className="details">{detailTodo[0].place}</label></div>
                <div>Date: <label className="details">{detailTodo[0].date}</label></div>
            </div>
            <div className="buttons">
                <Button variant="contained" color="success" id="doneButton" onClick={() => dispatcherDone()} >DONE</Button>
                <Button variant="contained" color="secondary" id="inProgressButton" onClick={() => dispatcherInProgress()} >IN PROGRESS</Button>
                <Button variant="outlined" color="error" startIcon={<DeleteIcon />} id="deleteButton" onClick={() => dispatcherRemove()} >DELETE</Button>
            </div>
            <div className="divBack">
              <Link exact to="/ToDoList/" className="link">← Back</Link>
            </div>
          </div>
          <hr />
        </div>
    </Fragment>
  )
};

export default TodoDetail;