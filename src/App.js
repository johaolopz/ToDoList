import './App.css';
//importaciones
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import AddTodo from './components/AddTodo/AddTodo';
import Nav from './components/Nav/Nav';


function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route exact path="/"
        element={<Home />} />
        <Route path="/add"
        element={<AddTodo />} />
      </Routes>
    </div>
  );
}

export default App;
