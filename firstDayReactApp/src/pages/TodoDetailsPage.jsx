import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import TodoPage from './TodoPage'

function TodoDetailsPage() {
    const { todiId } = useParams();
    const [todo, setTodo] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getTodoDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:8002/todos/${todiId}`);
                setTodo(response.data);
            } catch (error) {
                console.error('Error fetching todo details:', error);
                setError('Error fetching todo details');
            }
        };
        getTodoDetails();
    }, [todiId]);

    const removeTodo = () => {
        axios.delete(`http://localhost:8002/todos/${todiId}`)
            .then(() => {
                window.history.back();
                // setSnackbarMessage('Todo removed successfully!');
                // setSnackbarColor('success');
                // setSnackbarOpen(true);
            })
            .catch(error => {
                console.error('Error removing todo:', error);
                // setSnackbarMessage(`Error removing todo: ${error.message}`);
                // setSnackbarColor('error');
                // setSnackbarOpen(true);
            });
    };

    if (error) {
        return <div>{error}</div>;
    }

    if (!todo) {
        return <div>Loading...</div>;
    }

    return (
        <Box sx={{ minWidth: 400, marginTop: 10 }}>
            <Card variant="outlined">
                <CardContent>
                    <Typography variant="h4" component="div" gutterBottom>
                        Todo Details
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Title: {todo.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Completed: {todo.isComplete ? 'Yes' : 'No'}
                    </Typography>
                </CardContent>
                <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Button size="small" onClick={() => window.history.back()}>Go Back</Button>
                    <Button onClick={() => removeTodo(todo.id)} variant="contained" color="error"><DeleteIcon />
                    </Button>
                </CardActions>
            </Card>
        </Box>
    );
}

export default TodoDetailsPage;
