import React from 'react';
import { InputAdornment, Box, TextField, Typography, Grid } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Header } from '../../components/Header';


function SearchPage () {
  return (
    <>
      <Header text="Busca" icon={true} />

      <Grid style={{ display: 'flex', flexDirection: 'column', maxWidth: '360px', margin: '0 auto'}}>
        <Box>
          <form variant="outlined">
            <TextField 
              autoFocus
              name="search"
              fullWidth
              margin="normal"
              placeholder="Restaurante"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                      <SearchIcon color="baseColor" />
                  </InputAdornment>
                ),
              }}
            />
          </form>
        </Box>

        <Typography fontWeigth="600" style={{ alignSelf: 'center' }}>
          Busque por nome de restaurante
        </Typography>
      
      </Grid>
    
    </>
  );
}

export default SearchPage;