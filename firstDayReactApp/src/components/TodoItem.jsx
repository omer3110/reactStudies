// src/components/TodoItem.jsx
import React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Checkbox from '@mui/material/Checkbox';
import Tooltip from '@mui/material/Tooltip';
import { NavLink } from 'react-router-dom';



const TodoItem = ({ todo, handleToggle, removeTodo }) => {
    return (
        <li>
            <Checkbox id={todo.id} checked={todo.isComplete} onChange={() => handleToggle(todo.id)} />
            <label htmlFor={todo.id} style={{ textDecoration: todo.isComplete ? 'line-through' : 'none' }}>
                {todo.title}
            </label>
            <Tooltip title="Expand" placement="top" >
                <NavLink to={`${todo.id}`} style={{ cursor: 'pointer', textDecoration: 'none', color: 'black', marginRight: '20px' }} >
                    Details
                </NavLink>
            </Tooltip>
            <Tooltip title="Remove Todo" placement="top" >
                <Button removeTodo={removeTodo} onClick={() => removeTodo(todo.id)} variant="contained" color="error"><DeleteIcon />
                </Button>
            </Tooltip>
            <div id={todo.id} style={{ display: todo.isExpanded ? 'block' : 'none' }}>
                <p>{todo.title}</p>
            </div>
        </li>
    );
};

export default TodoItem;
