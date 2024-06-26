// src/components/TodoList.jsx
import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, handleToggle, removeTodo, expandTodo }) => {
    if (todos.length === 0) {
        return <p>No todos available</p>;
    }
    return (
        <ul>
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    handleToggle={handleToggle}
                    removeTodo={removeTodo}
                    expandTodo={expandTodo}
                />
            ))}
        </ul>
    );
};

export default TodoList;
