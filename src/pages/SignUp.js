import React from 'react'
import styled from 'styled-components'
import logo from "../images/logo-future-eats-invert.png"
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { InputAdornment } from '@mui/material';
import { InputLabel } from '@mui/material';
import { FormControl } from '@mui/material';
import { OutlinedInput } from '@mui/material';
import { IconButton } from '@mui/material';
import { Visibility } from '@mui/icons-material';
import { VisibilityOff } from '@mui/icons-material';


const SignUpStyle = styled.div`
display: flex;
flex-direction: column;
align-items: center;

img{
    margin: 16px auto 16px auto;
    width: 104px;
    height: 58px;
}
`

const SignUp = () => {
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
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

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };


    return (
        <SignUpStyle>
            <img src={logo} alt='Logotipo Rappi4' />

            <h4>Cadastrar</h4>
            <TextField
                required
                label="Nome"
                id="outlined-start-adornment"
                sx={{ m: 1, width: '25ch' }}
                InputProps={{
                    startAdornment: <InputAdornment position="start" />,
                }}
            />
            <TextField
                required
                label="E-mail"
                id="outlined-start-adornment"
                sx={{ m: 1, width: '25ch' }}
                InputProps={{
                    startAdornment: <InputAdornment position="start" />,
                }}
            />
            <TextField
                required
                label="CPF"
                type="number"
                id="outlined-start-adornment"
                sx={{ m: 1, width: '25ch' }}
                InputProps={{
                    startAdornment: <InputAdornment position="start" />,
                }}
            />
            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-password"
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.password}
                    onChange={handleChange('password')}
                    endAdornment={
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
                    }
                    label="Password"
                />
            </FormControl>
            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-password"
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.password}
                    onChange={handleChange('password')}
                    endAdornment={
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
                    }
                    label="Password"
                />
            </FormControl>


            <button>Criar</button>
        </SignUpStyle>
    )
}

export default SignUp