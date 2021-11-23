import React, { useState } from "react";
import { addTodo } from '../../redux/actions/index';
import { useDispatch } from "react-redux";
import "./addtodo.css"

function AddTodo() {
    const dispatch = useDispatch();
    const [inputText, setInputText] = useState({
        title: '',
        description: '',
        place: '',
        date: ''
      });
      
      function handleChange(e) {
        setInputText({ 
          ...inputText,
          [e.target.name]: e.target.value });
      }
      
      function handleSubmit(e) {
        e.preventDefault();
        if (inputText.title === '' || inputText.description === '' || inputText.place === '' || inputText.date === '') {
          alert("Could not add. Fill in all fields!!!")
        }
        else {
          dispatch(addTodo(inputText));
          alert('ToDO added successfully!!!');
          setInputText({
            title: '',
            description: '',
            place: '',
            date: ''
          });
        }
      }      
    return (
        <div className="divFormGlobal">
          <div className="divForm">
            <form className="form-container" onSubmit={(e) => handleSubmit(e)}>
                <label className="label" htmlFor="title">Title</label>
                <input
                type="text"
                name="title"
                autoComplete="off"
                value= {inputText.title}
                onChange={handleChange}
                className="inputs"
                />
                <label className="label" htmlFor="description">Description</label>
                <textarea
                name="description"
                value= {inputText.description}
                onChange={handleChange}
                className="inputs">
                </textarea>
                <label className="label" htmlFor="place">Place</label>
                <input
                type="text"
                name="place"
                autoComplete="off"
                value= {inputText.place}
                onChange={handleChange}
                className="inputs"
                />
                <label className="label" htmlFor="date">Date</label>
                <input
                type="date"
                name="date"
                autoComplete="off"
                value= {inputText.date}
                onChange={handleChange}
                className="inputs"
                />
                <button id="addButton" type="submit">Add</button>
            </form>
          </div>
        </div>
    );
}

export default AddTodo;