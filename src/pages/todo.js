import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './todo.css';
import TodoItems from '../components/todoitems';


const TodoList = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const displayName = params.get('name'); 

    const [showTodoItems, setShowTodoItems] = useState(false);

    const handleCreateTodoClick = () => {
      setShowTodoItems(true);
    };


  return (
    <>
      <section className='mainpage'>
        <div className='todo-container'>
          <div className='header'>
            <h1 className='displayname'>{displayName}'s To-do</h1>
            <button className='todo-btn' onClick={handleCreateTodoClick}>Create To-do</button>
          </div>

          {showTodoItems && <TodoItems />}

          {/* <TodoItems /> */}

        </div>
      </section>
    </>
  );
};

export default TodoList;
