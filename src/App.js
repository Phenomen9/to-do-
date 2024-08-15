



import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TodoList from './pages/todo';
import Login from './pages/login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/todo" element={<TodoList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
