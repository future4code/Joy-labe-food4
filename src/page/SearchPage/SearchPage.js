import React, { useState, useEffect } from 'react';
import { InputAdornment, Box, TextField, Typography, Grid } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Header } from '../../components/Header';
import { CardRestaurant } from '../../components/CardRestaurant';
import axios from 'axios';


function SearchPage () {
  const [restaurants, setRestaurants] = useState([])

  const url = 'https://us-central1-missao-newton.cloudfunctions.net/rappi4B/restaurants';

  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ikt5UDBERTZVblN6dmFwNUpKUVpyIiwibmFtZSI6IldhbmVzc2EiLCJlbWFpbCI6Indhbm5zYW50dG9zQGdtYWlsLmNvbSIsImNwZiI6IjA1MTIyMzU1Njg5IiwiaGFzQWRkcmVzcyI6dHJ1ZSwiYWRkcmVzcyI6IlIuIEFmb25zbyBCcmF6LCAxNzcsIDcxIC0gVmlsYSBOLiBDb25jZWnDp8OjbyIsImlhdCI6MTY0NTU2NDAzNX0.6duKhYKw0dTzk4AGyyS0aHflSHzjY6-yZw5fqHJYaEk';

  async function getAllRestaurants() {
    try {
      const response = await axios.get(url, {
        headers: { auth: token }
      })
      console.log(response.data.restaurants)
      setRestaurants(response.data.restaurants)
    } catch (error) {
      console.log(error)
    }
  }

  const handleSearch = ({ name }) => {

    const search = {}

    restaurants.map(item => (
      search = item.find(elem => elem.name === name)
    ))
    
    console.log(search)
    return search
  }

  useEffect(() => {
    getAllRestaurants()
  }, []);



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
              onChange={(e) => handleSearch(e.target.value)}
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
        
        {restaurants.length === 0 && (
          <Typography fontWeigth="600" style={{ alignSelf: 'center' }}>
            Busque por nome de restaurante
          </Typography>
        )}

        <Grid justifyContent="center" alignItems="center" style={{ display: 'flex', flexDirection: 'column' }}>
          {restaurants.map((item, index) => (
            <CardRestaurant key={index} logo={item.logoUrl} name={item.name} time={item.deliveryTime} shipping={item.shipping} />
          ))}
        </Grid>

      
      </Grid>
    
    </>
  );
}

export default SearchPage;