import * as React from 'react';
import { useState } from 'react'; // Import the useState
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import bkImage from '../images/peso.png';
import axios from 'axios'; // Import axios
import { Link } from 'react-router-dom';

const defaultTheme = createTheme();

export default function Signup({ setIsLoggedIn }) {
  const [error, setError] = useState(null); // State to handle errors

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email');
    const password = data.get('password');

    try {
      // Replace the URL with the endpoint for creating a new account
      const response = await axios.post('http://localhost:3000/users/signup', {
        email: email,
        password: password,
      });

      if (response.data) {
        setIsLoggedIn(true);
      } else {
        setError('Unable to create an account. Please try again.');
      }
    } catch (error) {
      setError('An error occurred while creating an account.');
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square sx={{ backgroundColor: '#e3ff00' }}>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component="h1" variant="h2" fontFamily={'sans-serif'} sx={{ fontWeight: 'bold' }}>
              AppShape
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="E-mail"
                name="email"
                autoComplete="email"
                autoFocus
                inputProps={{ 'data-testid': 'email' }}
                sx={{ backgroundColor: 'white' }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Senha"
                type="password"
                id="password"
                inputProps={{ 'data-testid': 'password' }}
                autoComplete="new-password"
                sx={{ backgroundColor: 'white' }}
              />
              <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                Criar Conta {/* Change button label */}
              </Button>
            </Box>
            {error && <Typography color="error">{error}</Typography>}
          </Box>
        </Grid>
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          style={{
            backgroundImage: `url(${bkImage})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </Grid>
    </ThemeProvider>
  );
}