import { BsCircle, BsCheckCircle, BsTrash3, BsPencilSquare, BsCheckLg } from "react-icons/bs";
import './TodoItem.css'
import { useState } from "react";

export default function TodoItem({ todo, onToggleDone, onDelete, onEdit }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEdiText] = useState(todo.title);

    const handleSave = () => {
        if (editText.trim() !== "") {
            onEdit(todo.id, editText);
            setIsEditing(false);
        }
    }

    return (
        <li className="todo-item">
            <div className="todo-check">
                {!isEditing && (
                    <span className="action-button" onClick={() => onToggleDone(todo.id)}>
                        {todo.done ? <BsCheckCircle size={18} /> : <BsCircle size={18} />}
                    </span>
                )}
                {isEditing ? (
                    <input
                        type="text"
                        className="todo-edit-input"
                        value={editText}
                        onChange={(e) => setEdiText(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") handleSave();
                        }}
                    />
                ) : (
                    <span className="title" style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
                        {todo.title}</span>
                )}
            </div>
            <div className="item-buttons">
                {isEditing ? (
                    <span className="action-button" onClick={handleSave}>
                        <BsCheckLg size={18} />
                    </span>
                ) : (
                    <span className="action-button" onClick={() => setIsEditing(true)}>
                        <BsPencilSquare size={18} />
                    </span>
                )}
                <span className="action-button" onClick={() => onDelete(todo.id)}><BsTrash3 size={18} /></span>
            </div>
        </li>
    );
}