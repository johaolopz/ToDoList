import './App.css';
//importaciones
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import AddTodo from './components/AddTodo/AddTodo';
import Nav from './components/Nav/Nav';
import TodoDetail from './components/TodoDetail/TodoDetail';
import Social from './components/Social/Social';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route exact path="/"
        element={<Home />} />
        <Route path="/add"
        element={<AddTodo />} />
        <Route path="/edit/:id"
        element={<TodoDetail />} />
      </Routes>
      <Routes>
        <Route exact path="/"
        element={<Social />} />
      </Routes>
    </div>
  );
}

export default App;
