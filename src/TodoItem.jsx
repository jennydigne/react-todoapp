import { BsCircle, BsCheckCircle, BsTrash3 } from "react-icons/bs";
import './TodoItem.css'

export default function TodoItem({ todo, onToggleDone, onDelete }) {
    return (
        <li className="todo-item">
            <div className="todo-check">
                <span className="action-button" onClick={() => onToggleDone(todo.id)}>
                    {todo.done ? <BsCheckCircle size={16} /> : <BsCircle size={16} />}
                </span>
                <span className="title" style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
                    {todo.title}</span>
            </div>
            <div className="item-buttons">

                <span className="action-button" onClick={() => onDelete(todo.id)}><BsTrash3 size={16} /></span>
            </div>
        </li>
    );
}