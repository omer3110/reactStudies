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
import { Link, NavLink, Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage';
import TodoPage from './pages/TodoPage';
import TodoDetailsPage from './pages/TodoDetailsPage';
import CreateTodoPage from './pages/CreateTodoPage';
import NotFoundPage from './pages/NotFoundPage';

const App = () => {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/todo" element={<TodoPage />}>
          <Route path="new" element={<CreateTodoPage />} />
        </Route>
        <Route path="/todo/:todiId" element={<TodoDetailsPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
