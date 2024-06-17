// src/components/TodoStatistics.jsx
import React from 'react';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';

const TodoStatistics = ({ totalTodos, completedTodos, activeTodos, completionRate }) => {
    return (
        <div className='statistics'>
            <Typography variant="h2" gutterBottom sx={{ fontSize: '2rem' }}>
                Total number of Todos: {totalTodos}</Typography>
            <Typography variant="h3" gutterBottom sx={{ fontSize: '1.5rem' }}>
                Total number of completed Todos: {completedTodos}
            </Typography>
            <Typography variant="h3" gutterBottom sx={{ fontSize: '1.5rem' }}>
                Total number of active Todos: {activeTodos}
            </Typography>

            <div className="progress-bar-container">
                <div className="progress-bar" style={{ width: `${completionRate}%` }}></div>
            </div>
            {/* <LinearProgress variant="determinate" value={completionRate} /> */}
            <Typography variant="subtitle1" gutterBottom>

                {Math.round(completionRate)}% completed
            </Typography>

        </div>
    );
};

export default TodoStatistics;
