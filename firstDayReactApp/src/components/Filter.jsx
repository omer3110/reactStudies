import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';

const Filter = ({ todos, setFilteredTodos }) => {
    const [searchParams, setSearchParams] = useSearchParams();

    const q = searchParams.get("q") || "";
    const isComplete = searchParams.get("isComplete") || "";

    const handleTitleFilterChange = (event) => {
        const value = event.target.value;
        setSearchParams(prev => {
            prev.set("q", value);
            return prev;
        });
    };

    const handleIsCompleteFilterChange = (event) => {
        const value = event.target.value;
        setSearchParams(prev => {
            prev.set("isComplete", value);
            return prev;
        });
    };

    useEffect(() => {
        const filterTodos = () => {
            const filtered = todos.filter(todo => {
                const titleMatch = todo.title.toLowerCase().includes(q.toLowerCase());
                if (isComplete === '') {
                    return titleMatch;
                } else {
                    return titleMatch && todo.isComplete === (isComplete === 'true');
                }
            });
            setFilteredTodos(filtered);
        };

        filterTodos();
    }, [todos, q, isComplete, setFilteredTodos]);

    return (
        <div>
            <TextField
                id="outlined-basic"
                label="Filter by Title"
                variant="outlined"
                value={q}
                onChange={handleTitleFilterChange}
            />
            <Select value={isComplete} onChange={handleIsCompleteFilterChange}>
                <MenuItem value="">All</MenuItem>
                <MenuItem value="true">Completed</MenuItem>
                <MenuItem value="false">Incomplete</MenuItem>
            </Select>
        </div>
    );
};

export default Filter;