import React, { useRef } from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';

const AddTodoForm = ({ addTodo, setSnackbarMessage, setSnackbarColor, setSnackbarOpen }) => {
    const inputRef = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        const newTodoTitle = inputRef.current.value.trim(); // Get the value from the input field
        if (newTodoTitle !== '') {
            addTodo(newTodoTitle);
            inputRef.current.value = ''; // Reset the input field after adding a todo
            inputRef.current.focus(); // Focus the input field after adding a todo
        }
        else {
            setSnackbarMessage('Can not add an empty todo!');
            setSnackbarColor('error');
            setSnackbarOpen(true);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <TextField sx={{ width: '30vw' }}
                    type="text"
                    inputRef={inputRef}
                    placeholder="Enter your todo"
                />
                {/* <input
                type="text"
                ref={inputRef} // Assign the ref to the input element
                placeholder="Enter your todo"
            /> */}
                <Tooltip title="Add Todo" placement="top" >
                    <Button type='submit' variant="contained"><AddIcon /></Button>
                </Tooltip >
                {/* <button>Add Todo</button> */}
            </form>
            <button to="/new"> add</button>
        </>
    );
};

export default AddTodoForm;