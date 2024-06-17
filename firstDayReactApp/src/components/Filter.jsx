import React, { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';

const Filter = ({ todos, setFilteredTodos }) => {
    const [titleFilter, setTitleFilter] = useState('');
    const [isCompleteFilter, setIsCompleteFilter] = useState('');

    const handleTitleFilterChange = (event) => {
        const { value } = event.target;
        setTitleFilter(value);
        filterTodos(value, isCompleteFilter);
    };

    const handleIsCompleteFilterChange = (event) => {
        const { value } = event.target;
        setIsCompleteFilter(value);
        filterTodos(titleFilter, value);
    };

    const filterTodos = (title, isComplete) => {
        const filtered = todos.filter(todo => {
            const titleMatch = todo.title.toLowerCase().includes(title.toLowerCase());
            if (isComplete === '') {
                return titleMatch;
            } else {
                return titleMatch && todo.isComplete === (isComplete === 'true');
            }
        });
        setFilteredTodos(filtered);
    };

    return (
        <div>

            <TextField
                id="outlined-basic"
                label="Filter by Title"
                variant="outlined" value={titleFilter}
                onChange={handleTitleFilterChange} />

            <Select value={isCompleteFilter} onChange={handleIsCompleteFilterChange}>
                <MenuItem value="">All</MenuItem>
                <MenuItem value="true">Completed</MenuItem>
                <MenuItem value="false">Incomplete</MenuItem>
            </Select>

            {/* <input
                type="text"
                placeholder="Filter by Title"
                value={titleFilter}
                onChange={handleTitleFilterChange}
            /> */}
            {/* <select value={isCompleteFilter} onChange={handleIsCompleteFilterChange}>
                <option value="All">All</option>
                <option value="true">Completed</option>
                <option value="false">Incomplete</option>
            </select> */}
        </div>
    );
};

export default Filter;
