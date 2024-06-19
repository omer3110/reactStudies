import React, { useRef } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import AddIcon from '@mui/icons-material/Add';
import SideBar from '../components/SideBar';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

const CreateTodoPage = () => {
    const inputRef = useRef(null);
    const navigate = useNavigate();
    const { addTodo } = useOutletContext();

    const handleSubmit = (event) => {
        event.preventDefault();
        const newTodoTitle = inputRef.current.value.trim();
        if (newTodoTitle !== '') {
            const newTodo = {
                title: newTodoTitle,
                isComplete: false,
            };
            axios.post('http://localhost:8002/todos', newTodo)
                .then(response => {
                    addTodo && addTodo(response.data); // Call addTodo to update state in TodoPage
                    navigate('/todo'); // Navigate back to the todo list
                })
                .catch(error => console.error('Error adding todo:', error));
        }
    };

    return (
        <>
            <SideBar />
            <Modal
                open={true}
                onClose={() => navigate('/todo')}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-title" variant="h6" component="h2">
                        Create New Todo
                    </Typography>
                    <form onSubmit={handleSubmit}
                        sx={{ display: 'flex', gap: '16px' }}>
                        <TextField
                            sx={{ height: 45, padding: 0 }}
                            fullWidth
                            inputRef={inputRef}
                            placeholder="Enter your todo"
                            margin="normal"
                        />
                        <Button type="submit" variant="contained" color="primary" sx={{ height: 45 }}>
                            <AddIcon />
                        </Button>
                    </form>
                </Box>
            </Modal>
        </>
    );
};

export default CreateTodoPage;