// src/components/TodoItem.jsx
import React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Checkbox from '@mui/material/Checkbox';
import Tooltip from '@mui/material/Tooltip';


const TodoItem = ({ todo, handleToggle, removeTodo }) => {
    return (
        <li>
            <Checkbox id={todo.id} checked={todo.isComplete} onChange={() => handleToggle(todo.id)} />
            <label htmlFor={todo.id} style={{ textDecoration: todo.isComplete ? 'line-through' : 'none' }}>
                {todo.title}
            </label>
            <Tooltip title="Remove Todo" placement="top" >
                <Button onClick={() => removeTodo(todo.id)} variant="contained" color="error"><DeleteIcon />
                </Button>
            </Tooltip>

        </li>
    );
};

export default TodoItem;
