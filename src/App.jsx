import { useState } from 'react'
import './App.css'
import TodoItem from './TodoItem';
import { BsPlusLg } from "react-icons/bs";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    setTodos([...todos, {
      id: Date.now(),
      title: input,
      done: false
    }]);
    setInput("");
  }

  const toggleDone = (id) => {
    setTodos(todos.map((todo) =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  const editTodo = (id, newTitle) => {
    setTodos(todos.map((todo) =>
      todo.id === id ? { ...todo, title: newTitle } : todo
    ));
  }

  return (
    <div className='todo-app'>
      <form className='list-header' onSubmit={(e) => {
        e.preventDefault();
        if (input.trim() !== "") addTodo();
      }}>
        <h1 className='app-title'>My Todo List</h1>
        <div className='input-container'>
          <input
            className='todo-input'
            type="text"
            placeholder='Add new todo'
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            type='submit'
            className='add-button'
            disabled={input.trim() === ""}>
            <BsPlusLg size={18} />
          </button>
        </div>
      </form>
      <ul className='todo-list'>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggleDone={toggleDone}
            onDelete={deleteTodo}
            onEdit={editTodo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
