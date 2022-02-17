import React from 'react'
import logo from "../../images/logo-future-eats-invert.png"
import { useState } from 'react';


import TextField from '@mui/material/TextField';
import { InputAdornment } from '@mui/material';
import { IconButton } from '@mui/material';
import { Visibility } from '@mui/icons-material';
import { VisibilityOff } from '@mui/icons-material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

import { SignUpStyle } from './styled';
import { Header } from './styled';


const SignUp = () => {
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        confirmPassword: '',
        weight: '',
        weightRange: '',
        showPassword: false,
        showConfirmPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleClickShowConfirmPassword = () => {
        setValues({
            ...values,
            showConfirmPassword: !values.showConfirmPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };


    return (
        <SignUpStyle>
            <Header>
                <ArrowBackIosIcon className='icon' />
            </Header>
            <img src={logo} alt='Logotipo Rappi4' />

            <h4>Cadastrar</h4>

            <TextField
                fullWidth
                className='input'
                required
                label="Nome"
                placeholder='Nome e sobrenome'
                id="outlined-start-adornment"
                sx={{ m: 1, width: '328px', height: '56px' }}
                InputProps={{
                    startAdornment: <InputAdornment position="start" />,
                }}
            />
            <TextField
                fullWidth
                className='input'
                required
                label="E-mail"
                placeholder='email@email.com'
                id="outlined-start-adornment"
                sx={{ m: 1, width: '328px', height: '56px' }}
                InputProps={{
                    startAdornment: <InputAdornment position="start" />,
                }}
            />
            <TextField
                fullWidth
                className='input'
                required
                label="CPF"
                placeholder='000.000.000-00'
                id="outlined-start-adornment"
                sx={{ m: 1, width: '328px', height: '56px' }}
                InputProps={{
                    startAdornment: <InputAdornment position="start" />,
                }}
            />

            <TextField
                fullWidth
                className='input'
                required
                label="Senha"
                placeholder='Mínimo 6 caracteres'
                id="outlined-start-adornment"
                sx={{ m: 1, width: '328px', height: '56px' }}
                InputProps={{
                    startAdornment: <InputAdornment position="start" />,
                    endAdornment:
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                            >
                                {values.showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                }}

                type={values.showPassword ? 'text' : 'password'}
                value={values.Password}
                onChange={handleChange('password')}
            />

            <TextField
                fullWidth
                className='input'
                required
                label="Confirmar"
                placeholder='Confirme a senha anterior'
                id="outlined-start-adornment"
                sx={{ m: 1, width: '328px', height: '56px' }}
                InputProps={{
                    startAdornment: <InputAdornment position="start" />,
                    endAdornment:
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowConfirmPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                            >
                                {values.showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>

                }}

                type={values.showConfirmPassword ? 'text' : 'password'}
                value={values.confirmPassword}
                onChange={handleChange('confirmPassword')}
            />
            <button id="button--criar">Criar</button>
        </SignUpStyle>
    )
}

export default SignUp