import React, { useState } from 'react';
import DateTimePicker from './date-time';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TodoItems = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');
  const [date, setDate] = useState('');
  const [isEditing, setIsEditing] = useState(null);
  const [editText, setEditText] = useState('');
  const [editDate, setEditDate] = useState('');

  const notify = (message) => {
    toast.success(message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const handleAddTodo = (e) => {
    if (e.key === 'Enter' && text) {
      const newTodo = {
        text,
        date: date,
        completed: false,
      };

      setTodos((prevState) => [...prevState, newTodo]);
      setText('');
      setDate('');
      notify("Task added successfully!");
    }
  };

  const toggleComplete = (index) => {
    setTodos(
      todos.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleEditTodo = (index) => {
    setIsEditing(index);
    setEditText(todos[index].text);
    setEditDate(todos[index].date);
  };

  const handleSaveEdit = (index) => {
    setTodos(
      todos.map((todo, i) =>
        i === index ? { ...todo, text: editText, date: editDate } : todo
      )
    );
    setIsEditing(null);
    notify("Task updated successfully!");
  };

  const handleDeleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
    notify("Task deleted successfully!");
  };

  return (
    <div style={{ margin: '', width: '100%', borderBottom: '1px solid #E6E6E6' }}>
      <ToastContainer />
      {/* Todo Input */}
      <div style={{ display: 'flex' }}>
        <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '8px' }}>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Daily Stand up"
            onKeyDown={handleAddTodo}
            style={{
              width: '200px',
              padding: '5px',
              marginRight: '10px',
              border: 'none',
            }}
          />
          <DateTimePicker setDate={setDate} />
        </div>
      </div>

      {/* Todo List */}
      {todos.map((todo, index) => {
        const isDue = new Date(todo.date) < new Date(); // Check if the todo is due

        return (
          <div
            key={index}
            style={{
              display: 'flex',
              borderBottom: '1px solid #ccc',
              padding: '10px 0',
              alignItems: 'center',
            }}
          >
            <div
              onClick={() => toggleComplete(index)}
              style={{
                position: 'relative',
                marginRight: '10px',
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                border: '2px solid gray',
                backgroundColor: todo.completed ? (isDue ? 'red' : 'green') : 'white', // Change color based on due status
                cursor: 'pointer',
              }}
            >
              {todo.completed && (
                <div
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '18px',
                    height: '18px',
                    borderRadius: '50%',
                    backgroundColor: isDue ? 'red' : 'green',
                  }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="18px"
                    height="18px"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                    }}
                  >
                    <path
                      d="M20.2857 6.57143L10.5714 16.2857L7.71429 13.4286L6 15.1429L10.5714 19.7143L22 8.28571L20.2857 6.57143Z"
                      fill="white"
                      stroke="none"
                    />
                  </svg>
                </div>
              )}
            </div>
            {isEditing === index ? (
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  style={{
                    flexGrow: 1,
                    padding: '5px',
                    marginRight: '10px',
                    border: 'none',
                  }}
                />
                <DateTimePicker setDate={setEditDate} />
                <button onClick={() => handleSaveEdit(index)}>Save</button>
              </>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <span>
                  {todo.text}
                </span>
                <p style={{ color: '#888', margin: '0px' }}>
                  {new Date(todo.date).toLocaleString('en-GB', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: true
                  })}
                </p>
              </div>
            )}
            <div style={{ marginLeft: '10px' }}>
              {isEditing !== index && (
                <>
                  <button onClick={() => handleEditTodo(index)}>Edit</button>
                  <button onClick={() => handleDeleteTodo(index)} style={{ marginLeft: '5px' }}>
                    Delete
                  </button>
                </>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TodoItems;
