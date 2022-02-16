import React from 'react'
import styled from 'styled-components'
import logo from "../../images/logo-future-eats-invert.png"
import { useState } from 'react';

import { Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import { InputAdornment } from '@mui/material';
import { InputLabel } from '@mui/material';
import { FormControl } from '@mui/material';
import { OutlinedInput } from '@mui/material';
import { IconButton } from '@mui/material';
import { Visibility } from '@mui/icons-material';
import { VisibilityOff } from '@mui/icons-material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const SignUpStyle = styled.div`
display: flex;
flex-direction: column;
align-items: center;

img{
    margin: 16px auto 16px auto;
    width: 104px;
    height: 58px;
}

#button--criar{
    width: 328px;
    height: 43px;
    padding: 12px 16px;
    border-radius: 2px;
    background-color: #e86e5a;
    border: none;

}

h4{
    width: 296px;
    height: 18px;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    text-align: center;
    color: #000;
}
`
const Header = styled.div`
width: 100%;
height: 64px;
box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);

.icon{
    width: 23px;
    height: 24px;
    margin: 30px auto 10px 16px;
}

.input{
    width: 328px;
    height: 56px;
}

`

const SignUp = () => {
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        confirmPassword: '',
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
                type="number"
                id="outlined-start-adornment"
                sx={{ m: 1, width: '328px', height: '56px' }}
                InputProps={{
                    startAdornment: <InputAdornment position="start" />,
                }}
            />
            <FormControl className='input' fullWidth sx={{ m: 1, width: '328px', height: '56px' }} variant="outlined" >
                <InputLabel htmlFor="outlined-adornment-password" id="outlined-start-adornment" label="Senha" required InputProps={{
                    startAdornment: <InputAdornment position="start" />,
                }}>Senha</InputLabel>
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
                />
            </FormControl>
            <FormControl className='input' fullWidth sx={{ m: 1, width: '328px', height: '56px' }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password" label="Senha" required>Confirmar</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-password"
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.confirmPassword}
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
                    label="Senha"
                />
            </FormControl>


            <button id="button--criar">Criar</button>
        </SignUpStyle>
    )
}

export default SignUp