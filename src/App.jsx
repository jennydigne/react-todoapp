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

  return (
    <div className='todo-app'>
      <form className='list-header' onSubmit={(e) => {
        e.preventDefault();
        if (input.trim() !== "") addTodo();
      }}>
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
          onClick={addTodo}
          disabled={input.trim() === ""}>
          <BsPlusLg size={18} />
        </button>
      </form>
      <ul className='todo-list'>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggleDone={toggleDone}
            onDelete={deleteTodo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
