import styled from "@emotion/styled";
import { Button, Grid, Paper, TextField, ThemeProvider, Typography, createTheme } from "@mui/material";
import React, { useState } from "react";

const defaultTheme = createTheme();

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
export default function IMCCalculator() {
    const [height, setHeight] = useState(null);
    const [age, setAge] = useState(null);
    const [weight, setWeight] = useState(null);
    const [imc, setImc] = useState(null);
    const [message, setMessage] = useState(null);

    const calculate = () => {
        const tmpImc = (weight / (height ^ 2)).toFixed(2);
        if (tmpImc < 18.5) {
            setImc(tmpImc);
            setMessage('Abaixo do peso');
        }
        else if (imc >= 18.5 && imc <= 24.99) {
            setImc(tmpImc);
            setMessage("Peso Ideal");
        }
        else if (imc > 24.99 && imc < 30) {
            setImc(tmpImc);
            setMessage("Sobrepeso");
        }
        else if (imc >= 30 && imc < 35) {
            setImc(tmpImc);
            setMessage("Obesidade Moderada");
        }
        else if (imc >= 35 && imc < 40) {
            setImc(tmpImc);
            setMessage("Obesidade Severa");
        }
        else if (imc >= 40) {
            setImc(tmpImc);
            setMessage("Obesidade Mórbida");
        }
    }

    return (
        <ThemeProvider theme={defaultTheme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <Grid container item alignItems="center" justifyContent="center" xs={12} sm={12} md={12} component={Paper} elevation={12} square sx={{ backgroundColor: '#e3ff00' }}>
                    <Grid item xs={6}>
                        <Item>
                            <Typography component="h5" variant="h5" fontFamily={'sans-serif'} sx={{ fontWeight: 'bold' }}>
                                Cálculo de Índice de Massa Corporal
                            </Typography>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="height"
                                label="Altura (em centímetros)"
                                name="height"
                                autoComplete="height"
                                autoFocus
                                inputProps={{ "data-testid": "height" }}
                                sx={{ backgroundColor: '#F5F5F5' }}
                                onChange={(e) => setHeight(() => e.target.value)}
                                type="number"
                                InputProps={{ inputProps: { min: 1, max: 250 } }}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="weight"
                                label="Peso (em quilogramas)"
                                name="weight"
                                autoComplete="weight"
                                autoFocus
                                inputProps={{ "data-testid": "weight" }}
                                sx={{ backgroundColor: '#F5F5F5' }}
                                onChange={(e) => setWeight(() => e.target.value)}
                                type="number"
                                InputProps={{ inputProps: { min: 1, max: 1000 } }}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="age"
                                label="Idade"
                                name="age"
                                autoComplete="age"
                                autoFocus
                                inputProps={{ "data-testid": "age" }}
                                sx={{ backgroundColor: '#F5F5F5' }}
                                onChange={(e) => setAge(() => e.target.value)}
                                type="number"
                                InputProps={{ inputProps: { min: 1, max: 150 } }}
                            />
                            <Grid mb={6} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Grid>
                                    <Button variant="contained" onClick={calculate}>Calcular</Button>
                                </Grid>
                                {imc &&
                                    <Grid>
                                        <Typography sx={{ fontSize: 64, color: '#a8bd00', fontWeight: '700', display: 'flex' }}>81,3</Typography>
                                        <Typography sx={{ fontWeight: 'bold', fontSize: '130%' }}>{message}</Typography>
                                    </Grid>
                                }
                            </Grid>
                        </Item>
                    </Grid>
                </Grid>
            </Grid>
        </ThemeProvider>
    )
}