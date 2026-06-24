import { BiCheckbox, BiCheckboxChecked, BiTrash } from "react-icons/bi";
import { BsCircle, BsCheckCircle, BsTrash3  } from "react-icons/bs";
import './TodoItem.css'

export default function TodoItem({ todo, onToggleDone, onDelete }) {
    return (
        <li className="todo-item">
            <span className="todo-title" style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
                {todo.title}</span>
            <div className="item-buttons">
                <span className="action-button" onClick={() => onToggleDone(todo.id)}>
                    {todo.done ? <BsCheckCircle size={16} /> : <BsCircle size={16} />}
                </span>
                <span className="action-button" onClick={() => onDelete(todo.id)}><BsTrash3 size={16} /></span>
            </div>
        </li>
    );
}