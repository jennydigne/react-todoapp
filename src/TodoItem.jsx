import { BiCheckbox, BiCheckboxChecked, BiTrash } from "react-icons/bi";
import './TodoItem.css'

export default function TodoItem({ todo, onToggleDone, onDelete }) {
    return (
        <li className="todo-item">
            <span className="todo-title" style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
                {todo.title}</span>
            <div className="item-buttons"><button className="done-button" onClick={() => onToggleDone(todo.id)}>
                {todo.done ? <BiCheckboxChecked size={16} /> : <BiCheckbox size={16} />}
            </button>
                <button className="delete-button" onClick={() => onDelete(todo.id)}><BiTrash size={16} /></button></div>
        </li>
    );
}