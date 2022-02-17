import React from 'react'
import { useState } from 'react';


import TextField from '@mui/material/TextField';
import { InputAdornment } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

import { SignUpStyle } from './styled';
import { Header } from './styled';

const AdressPage = () => {
  const [values, setValues] = React.useState({
    logradouro: '',
    numero: '',
    complemento: '',
    bairro: '',
    cidade: '',
    estado: '',
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <SignUpStyle>
      <Header>
        <ArrowBackIosIcon className='icon' />
      </Header>

      <h4>Meu endereço</h4>

      <TextField
        onChange={handleChange}
        fullWidth
        className='input'
        required
        label="Logradouro"
        placeholder='Rua / Av.'
        id="outlined-start-adornment"
        sx={{ m: 1, width: '328px', height: '56px' }}
        InputProps={{
          startAdornment: <InputAdornment position="start" />,
        }}
      />
      <TextField
        onChange={handleChange}
        fullWidth
        className='input'
        required
        label="Número"
        placeholder='Número'
        id="outlined-start-adornment"
        sx={{ m: 1, width: '328px', height: '56px' }}
        InputProps={{
          startAdornment: <InputAdornment position="start" />,
        }}
      />
      <TextField
        onChange={handleChange}
        fullWidth
        className='input'
        required
        label="Complemento"
        placeholder='Apto. / Bloco'
        id="outlined-start-adornment"
        sx={{ m: 1, width: '328px', height: '56px' }}
        InputProps={{
          startAdornment: <InputAdornment position="start" />,
        }}
      />

      <TextField
        onChange={handleChange}
        fullWidth
        className='input'
        required
        label="Bairro"
        placeholder='Bairro'
        id="outlined-start-adornment"
        sx={{ m: 1, width: '328px', height: '56px' }}
        InputProps={{
          startAdornment: <InputAdornment position="start" />,
        }}
      />

      <TextField
        onChange={handleChange}
        fullWidth
        className='input'
        required
        label="Cidade"
        placeholder='Cidade'
        id="outlined-start-adornment"
        sx={{ m: 1, width: '328px', height: '56px' }}
        InputProps={{
          startAdornment: <InputAdornment position="start" />,
        }}
      />

      <TextField
        onChange={handleChange}
        fullWidth
        className='input'
        required
        label="Estado"
        placeholder='Estado'
        id="outlined-start-adornment"
        sx={{ m: 1, width: '328px', height: '56px' }}
        InputProps={{
          startAdornment: <InputAdornment position="start" />,
        }}
      />
      <button id="button--criar">Salvar</button>
    </SignUpStyle>
  )

}

export default AdressPage