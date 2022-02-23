import React, { useState, useEffect } from 'react';

import { InputAdornment, Box, TextField, Typography, Grid } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Header } from '../../components/Header';
import { CardRestaurant } from '../../components/CardRestaurant';

import { useGlobal } from '../../global/GlobalContext';

function SearchPage () {
  const [restaurants, setRestaurants] = useState([])
  const [restaurantsFiltered, setRestaurantsFiltered] = useState([])
  const [text, setText] = useState('Busque por nome de restaurante')
  const { getRestaurants } = useGlobal()


  const restaurantes = async () => {
    try {
      const response = await getRestaurants()
      setRestaurants(response)
    }
    catch (error) {
      console.log('ERRO AO BUSCAR RESTAURANTES', error)
    }
  }

  const searchRestaurants = (e) => {
    e.preventDefault();
    const search = e.target.value;
    const searchRestaurants = restaurants.filter(restaurant => {
      return restaurant.name.toLowerCase().includes(search.toLowerCase())
    })

    if(search.length > 0 && searchRestaurants.length === 0) {
      setText('Não encontramos :( ')
    }

    if(search.length === 0) {
      setRestaurantsFiltered([])
      setText('Busque por nome de restaurante')
    } else {
      setRestaurantsFiltered(searchRestaurants)
    }
  }

  useEffect(() => {
    restaurantes();
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
              onChange={(e) => searchRestaurants(e)}
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

        {restaurantsFiltered.length === 0 && (
          <Typography fontWeigth="600" style={{ alignSelf: 'center' }}>
            {text}
          </Typography>
        )}

        {restaurantsFiltered.length > 0 && (
          <Grid justifyContent="center" alignItems="center" style={{ display: 'flex', flexDirection: 'column' }}>
            <CardRestaurant logo={restaurantsFiltered[0].logoUrl} name={restaurantsFiltered[0].name} time={restaurantsFiltered[0].deliveryTime}  shipping={restaurantsFiltered[0].shipping} />
          </Grid>
        )}
      </Grid>

    </>
  );
}

export default SearchPage;
