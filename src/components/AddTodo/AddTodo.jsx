import React, { useState } from "react";
import { addTodo } from '../../redux/actions/index';
import { useDispatch } from "react-redux";

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
        dispatch(addTodo(inputText));
      }      
    return (
        <div>
            <form className="form-container" onSubmit={(e) => handleSubmit(e)}>
                <label className="label" htmlFor="title">Title</label>
                <input
                type="text"
                name="title"
                autoComplete="off"
                value= {inputText.title}
                onChange={handleChange}
                />
                <label className="label" htmlFor="description">Description</label>
                <textarea
                name="description"
                value= {inputText.description}
                onChange={handleChange}>
                </textarea>
                <label className="label" htmlFor="place">Place</label>
                <input
                type="text"
                name="place"
                autoComplete="off"
                value= {inputText.place}
                onChange={handleChange}
                />
                <label className="label" htmlFor="date">Date</label>
                <input
                type="text"
                name="date"
                autoComplete="off"
                value= {inputText.date}
                onChange={handleChange}
                />
                <button type="submit">Add</button>
            </form>
        </div>
    );
}

export default AddTodo;