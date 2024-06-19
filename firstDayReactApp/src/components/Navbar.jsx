import * as React from 'react';
import { NavLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Todo', path: '/todo' }
];

function Navbar() {
    return (
        <Box sx={{ display: 'flex', marginBottom: '20px' }}>
            <CssBaseline />
            <AppBar component="nav">
                <Toolbar>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        Omer's Todo List
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((item) => (
                            <NavLink
                                key={item.name}
                                to={item.path}
                                style={({ isActive }) => ({
                                    color: isActive ? 'black' : '#fff',
                                    textDecoration: 'none',
                                    padding: '10px 20px'
                                })}
                            >
                                {item.name}
                            </NavLink>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Navbar;