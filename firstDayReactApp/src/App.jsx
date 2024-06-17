import { useState, useEffect, useRef } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';
import TodoStatistics from './components/TodoStatistics';
import Filter from './components/Filter';
import Navbar from './components/Navbar';
import Typography from '@mui/material/Typography';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

const makeId = (length) => {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

const App = () => {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarColor, setSnackbarColor] = useState('');

  const hasMounted = useRef(false);

  useEffect(() => {
    if (!hasMounted.current) {
      console.log('Hello, welcome to the Todo App!');
      hasMounted.current = true;
    }
  }, []);

  useEffect(() => {
    fetch('http://localhost:8002/todos')
      .then(response => response.json())
      .then(data => {
        setTodos(data);
        setFilteredTodos(data);  // Initialize filteredTodos with the fetched data
      })
      .catch(error => console.error('Error fetching todos:', error));
  }, []);

  const totalTodos = todos.length;
  const completedTodos = todos.filter((todo) => todo.isComplete).length;
  const activeTodos = todos.filter((todo) => !todo.isComplete).length;
  const completionRate = totalTodos === 0 ? 0 : (completedTodos / totalTodos) * 100;


  const addTodo = (title) => {
    const newTodo = {
      id: makeId(5),
      title: title,
      isComplete: false,
    };
    fetch('http://localhost:8002/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTodo),
    })
      .then(response => response.json())
      .then(data => {
        setTodos(prevTodos => {
          const updatedTodos = [...prevTodos, data];
          console.log("Updated Todos after creating new todo:", updatedTodos);
          setFilteredTodos(updatedTodos);  // Update filteredTodos
          return updatedTodos;
        });
        setSnackbarMessage('Todo added successfully!');
        setSnackbarColor('success');
        setSnackbarOpen(true);
      })
      .catch(error => {
        console.error('Error adding todo:', error)
        setSnackbarMessage('Error adding todo:', error);
        setSnackbarColor('error');
        setSnackbarOpen(true);
      });
  };

  const removeTodo = (id) => {
    fetch(`http://localhost:8002/todos/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        setTodos(prevTodos => {
          const updatedTodos = prevTodos.filter(todo => todo.id !== id);
          console.log("Updated Todos after removing todo:", updatedTodos);
          setFilteredTodos(updatedTodos);  // Update filteredTodos
          return updatedTodos;
        });
        setSnackbarMessage('Todo added successfully!');
        setSnackbarColor('success');
        setSnackbarOpen(true);
      })
      .catch(error => {
        console.error('Error removing todo:', error)
        setSnackbarMessage('Error removing todo:', error);
        setSnackbarColor('error');
        setSnackbarOpen(true);
      });
  };

  const handleToggle = (id) => {
    const todoToUpdate = todos.find(todo => todo.id === id);
    const updatedTodo = { ...todoToUpdate, isComplete: !todoToUpdate.isComplete };
    fetch(`http://localhost:8002/todos/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedTodo),
    })
      .then(response => response.json())
      .then(data => {
        setTodos(prevTodos => {
          const updatedTodos = prevTodos.map(todo => (todo.id === id ? data : todo));
          console.log("Updated Todos after toggling todo completion status:", updatedTodos);
          setFilteredTodos(updatedTodos);  // Update filteredTodos
          return updatedTodos;
        });
        setSnackbarMessage('Todo added successfully!');
        setSnackbarColor('success');
        setSnackbarOpen(true);
      })
      .catch(error => {
        console.error('Error updating todo:', error)
        setSnackbarMessage('Error updating todo:', error);
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
    // <div className="container">
    <Card sx={{ width: 800 }}>
      <CardContent>
        <Navbar></Navbar>
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
        <AddTodoForm addTodo={addTodo}
          setSnackbarMessage={setSnackbarMessage}
          setSnackbarColor={setSnackbarColor}
          setSnackbarOpen={setSnackbarOpen} />
        <TodoList todos={filteredTodos} handleToggle={handleToggle} removeTodo={removeTodo} />

        <Snackbar open={snackbarOpen} autoHideDuration={3000} onClose={handleSnackbarClose}>
          <Alert onClose={handleSnackbarClose} severity={snackbarColor} variant="filled" sx={{ width: '100%' }}>
            {snackbarMessage}
          </Alert>
        </Snackbar>
      </CardContent>
    </Card>
    // </div>
  );
};

export default App;
