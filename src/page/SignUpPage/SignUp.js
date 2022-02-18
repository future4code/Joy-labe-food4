import React from 'react'
import logo from "../../images/logo-future-eats-invert.png"

import { useState } from 'react';
import axios from 'axios';
import { Base_url } from '../../constants/Urls';

import TextField from '@mui/material/TextField';
import { InputAdornment } from '@mui/material';
import { IconButton } from '@mui/material';
import { Visibility } from '@mui/icons-material';
import { VisibilityOff } from '@mui/icons-material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

import { SignUpStyle } from './styled';
import { Header } from './styled';


const SignUp = () => {
    const [values, setValues] = useState({
        name: undefined,
        email: undefined,
        cpf: undefined,
        password: undefined,
        confirmPassword: undefined,
        showPassword: false,
        showConfirmPassword: false,
    });
    const token = localStorage.getItem("token")

    const body = {
        name: values.name,
        email: values.email,
        cpf: values.cpf,
        password: values.password
    }

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

    const signUp = () => {
        if (values.name !== undefined && values.email !== undefined && values.cpf !== undefined && values.password !== undefined && values.confirmPassword !== undefined) {
            if (values.password.length >= 6) {
                if (values.password === values.confirmPassword) {

                    const response = axios.post(`${Base_url}/signup`, body, {
                        headers: {
                            "Content-Type": "application/json"
                        }
                    })
                        .then((res) => {
                            console.log(res)
                            localStorage.setItem("token", res.data.token)
                            //O usuário deve ser direcionado à página de cadastro de endereço
                            // if(hasAddress===false){
                            //     history.push(página de endereço)
                            // }


                            setValues({
                                name: undefined,
                                email: undefined,
                                cpf: undefined,
                                password: undefined,
                                confirmPassword: undefined,
                                showPassword: false,
                                showConfirmPassword: false,
                            })
                        })
                        .catch((err) => {
                            console.log(err)
                            alert("Ops! Ocorreu um erro.")
                        })
                }
                else {
                    alert("Confirme a senha corretamente.")
                }
            } else {
                alert("A senha deve ter no mínimo 6 dígitos.")
            }

        } else {
            alert("Todos os campos devem ser preenchidos!")
        }

    }

    return (
        <SignUpStyle>
            <Header>
                <ArrowBackIosIcon className='icon' />
            </Header>
            <img src={logo} alt='Logotipo Rappi4' />

            <h4>Cadastrar</h4>

            <TextField
                type='text'
                onChange={handleChange("name")}
                value={values.name}
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
                type='email'
                onChange={handleChange("email")}
                value={values.email}
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
                type='text'
                onChange={handleChange("cpf")}
                value={values.cpf}
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
                onChange={handleChange("password")}
                value={values.password}
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
            />

            <TextField
                onChange={handleChange("confirmPassword")}
                value={values.confirmPassword}
                fullWidth
                className='input'
                required
                label="Confirmar"
                placeholder='Confirme a senha anterior'
                id="outlined-start-adornment"
                sx={{
                    marginBottom: 3,
                    width: '328px', height: '56px'
                }}
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
                error={values.confirmPassword !== values.password}
                helperText={values.confirmPassword !== values.password ? "Deve ser a mesma que a anterior." : ""}
                margin='normal'
            />
            <button id="button--criar" onClick={signUp}>Criar</button>
        </SignUpStyle>
    )
}

export default SignUp