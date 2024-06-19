import React, { useState, useEffect, useRef } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import '../App.css';
import axios from 'axios';
import TodoList from '../components/TodoList';
import TodoStatistics from '../components/TodoStatistics';
import Filter from '../components/Filter';
import Typography from '@mui/material/Typography';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import SideBar from '../components/SideBar';

const makeId = (length) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
};

function TodoPage() {
    const [todos, setTodos] = useState([]);
    const [filteredTodos, setFilteredTodos] = useState([]);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarColor, setSnackbarColor] = useState('');

    const hasMounted = useRef(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (!hasMounted.current) {
            console.log('Hello, welcome to the Todo App!');
            hasMounted.current = true;
        }
    }, []);

    useEffect(() => {
        axios.get('http://localhost:8002/todos')
            .then(response => {
                setTodos(response.data);
                setFilteredTodos(response.data); // Initialize filteredTodos with the fetched data
            })
            .catch(error => console.error('Error fetching todos:', error));
    }, []);

    const totalTodos = todos.length;
    const completedTodos = todos.filter((todo) => todo.isComplete).length;
    const activeTodos = todos.filter((todo) => !todo.isComplete).length;
    const completionRate = totalTodos === 0 ? 0 : (completedTodos / totalTodos) * 100;

    const getTodoDetails = (todoId) => {
        axios.get(`http://localhost:8002/todos/${todoId}`)
            .then(response => {
                console.log('Todo details:', response.data);
            })
            .catch(error => {
                console.error('Error fetching todo details:', error);
            });
    };

    const addTodo = (newTodo) => {
        setTodos(prevTodos => {
            const updatedTodos = [...prevTodos, newTodo];
            setFilteredTodos(updatedTodos); // Update filteredTodos
            return updatedTodos;
        });
    };

    const removeTodo = (id) => {
        axios.delete(`http://localhost:8002/todos/${id}`)
            .then(() => {
                setTodos(prevTodos => {
                    const updatedTodos = prevTodos.filter(todo => todo.id !== id);
                    setFilteredTodos(updatedTodos); // Update filteredTodos
                    return updatedTodos;
                });
                setSnackbarMessage('Todo removed successfully!');
                setSnackbarColor('success');
                setSnackbarOpen(true);
            })
            .catch(error => {
                console.error('Error removing todo:', error);
                setSnackbarMessage(`Error removing todo: ${error.message}`);
                setSnackbarColor('error');
                setSnackbarOpen(true);
            });
    };

    const handleToggle = (id) => {
        const todoToUpdate = todos.find(todo => todo.id === id);
        const updatedTodo = { ...todoToUpdate, isComplete: !todoToUpdate.isComplete };
        axios.put(`http://localhost:8002/todos/${id}`, updatedTodo)
            .then(response => {
                setTodos(prevTodos => {
                    const updatedTodos = prevTodos.map(todo => (todo.id === id ? response.data : todo));
                    setFilteredTodos(updatedTodos); // Update filteredTodos
                    return updatedTodos;
                });
                setSnackbarMessage('Todo updated successfully!');
                setSnackbarColor('success');
                setSnackbarOpen(true);
            })
            .catch(error => {
                console.error('Error updating todo:', error);
                setSnackbarMessage(`Error updating todo: ${error.message}`);
                setSnackbarColor('error');
                setSnackbarOpen(true);
            });
    };

    const handleSnackbarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setSnackbarOpen(false);
    };

    return (
        <>
            <SideBar />
            <Card sx={{ width: 800, backgroundColor: 'beige' }}>
                <CardContent>
                    <Typography variant="h1" gutterBottom sx={{ fontSize: '3rem' }}>
                        Todo List
                    </Typography>
                    <Filter todos={todos} setFilteredTodos={setFilteredTodos} />
                    <TodoStatistics
                        totalTodos={totalTodos}
                        completedTodos={completedTodos}
                        activeTodos={activeTodos}
                        completionRate={completionRate}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        startIcon={<AddIcon />}
                        onClick={() => navigate('/todo/new')}
                    >
                        Add Todo
                    </Button>
                    <TodoList todos={filteredTodos} handleToggle={handleToggle} removeTodo={removeTodo} getTodoDetails={getTodoDetails} />

                    <Snackbar open={snackbarOpen} autoHideDuration={3000} onClose={handleSnackbarClose}>
                        <Alert onClose={handleSnackbarClose} severity={snackbarColor} variant="filled" sx={{ width: '100%' }}>
                            {snackbarMessage}
                        </Alert>
                    </Snackbar>
                </CardContent>
            </Card>
            <Outlet context={{ addTodo }} />
        </>
    );
}

export default TodoPage;
