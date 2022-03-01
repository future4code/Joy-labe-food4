import React from "react"
import logo from "../../images/logo-future-eats-invert.png"
import { LoginStyle, StyledButtonCadastro } from './styled';
import TextField from '@mui/material/TextField';
import { InputAdornment } from '@mui/material';
import { IconButton } from '@mui/material';
import { Visibility } from '@mui/icons-material';
import { VisibilityOff } from '@mui/icons-material';
import { useState } from 'react';
import { useHistory } from "react-router-dom";
import { goToFeed, goToSingUp } from "../../routes/coordinator"

const LoginPage = () => {
    const history = useHistory()

    const [values, setValues] = useState({
        email: "",
        password: "",
        showPassword: false,
    });

    const token = localStorage.getItem("token")


    const body = {
        email: values.email,
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

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };



    return (
        <div>
            <LoginStyle>
                <img src={logo} alt='Logotipo Rappi4' />
                <p>Entrar</p>
                <TextField
                    onChange={handleChange("email")}
                    value={values.email}
                    fullWidth
                    className='input'
                    required
                    label="E-mail"
                    placeholder='email@email.com'
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
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>

                    }}

                    type={values.showPassword ? 'text' : 'password'}
                    margin='normal'
                />
                <button id="button--entrar" >Entrar</button>

                <StyledButtonCadastro onClick={() => goToSingUp(history)}>
                    <p>Não possui cadastro? Clique aqui.</p>
                </StyledButtonCadastro>

            </LoginStyle>
        </div>
    )
}

export default LoginPage