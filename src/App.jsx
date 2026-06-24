import { useState } from 'react'
import './App.css'
import TodoItem from './TodoItem';
import { BiPlus } from "react-icons/bi";

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
      <div className='add-todo'><input className='todo-input' type="text" placeholder='Add new todo' value={input}
        onChange={(e) => setInput(e.target.value)} />
        <button className='add-button' onClick={addTodo}
          disabled={input.trim() === ""}><BiPlus size={16} /></button>
      </div>
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
