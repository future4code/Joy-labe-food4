import axios from "axios";
import React, { useContext, useEffect, useState } from "react"
import { CardRestaurant } from '../../components/CardRestaurant';
import { Base_url } from "../../constants/Urls";
import { goToResult } from "../../routes/coordinator";
import GlobalContext from '../../global/GlobalContext';
import { useHistory } from "react-router-dom";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Navigation from "../../components/Navigation";
import { Header } from "../../components/Header";

import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment, Box, TextField, Typography, Grid } from '@mui/material';
import useProtectedPage from "../../hooks/useProtectedPage";

const FeedPage = () => {
  useProtectedPage()
  // const [value, setValue] = React.useState(0)
  // const ref = React.useRef(null);

  const [restaurantsFiltered, setRestaurantsFiltered] = useState([])
  const [text, setText] = useState('')

  const { states, setters } = useContext(GlobalContext)
  const { rest } = states
  const { setRest } = setters

  // const [restSearch, setRestSearch] = useState([])

  const history = useHistory()

  useEffect(() => {
    getRest()
  }, [restaurantsFiltered])

  // console.log(rest)
  const getRest = () => {
    axios
      .get(`${Base_url}/restaurants`,
        {
          headers: {
            auth: localStorage.getItem('token')
          }
        })
      .then((response) => {
        setRest(response.data.restaurants)
      })
      .catch((err) => {
        alert(err.data)
      })
  }

  const filterRestt = (typ) => {
    const filterR = rest.filter((restaurant) => {
      return restaurant.category === typ
    })

    setRest(filterR)
  }

  const searchRestaurants = (e) => {
    e.preventDefault();
    const search = e.target.value;
    const searchRestaurants = rest.filter(restaurant => {
      return restaurant.name.toLowerCase().includes(search.toLowerCase())
    })

    if (search.length > 0 && searchRestaurants.length === 0) {
      setText('Não encontramos :( ')
    }

    if (search.length === 0) {
      setRestaurantsFiltered([])
    } else {
      setRestaurantsFiltered(searchRestaurants)
    }
  }

  const renderL = () => {
    if (restaurantsFiltered.length === 0) {
      return (
        <Typography fontWeigth="600" style={{ alignSelf: 'center' }}>
          {text}
          {mapRest}
        </Typography>
      )
    } else {
      return (
        <Grid justifyContent="center" alignItems="center" style={{ display: 'flex', flexDirection: 'column' }}>
          <CardRestaurant logo={restaurantsFiltered[0].logoUrl} name={restaurantsFiltered[0].name} time={restaurantsFiltered[0].deliveryTime} shipping={restaurantsFiltered[0].shipping} />
        </Grid>
      )
    }
  }


  const mapRest = rest.map((restaurants) => {
    return (
      <Grid justifyContent="center" alignItems="center" onClick={() => goToResult(history, restaurants.id)} style={{ display: 'flex', flexDirection: 'column' }}>
        <CardRestaurant key={restaurants.id} logo={restaurants.logoUrl} name={restaurants.name} time={restaurants.deliveryTime} shipping={restaurants.shipping} />
      </Grid>
    )
  })
  return (
    <di>
      <di>
        <Header text="Home" />
      </di>
      <Grid style={{ display: 'flex', flexDirection: 'column', maxWidth: '360px', margin: '0 auto' }}>
        <div>
          {/* <p>FeedPage</p> */}
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
        </div>
        <div>
          <Stack spacing={2} direction="row">
            <Button variant="text" onClick={() => filterRestt("Árabe")}><b>Árabe</b></Button>
            <Button variant="text" onClick={() => filterRestt("Asiática")}><b>Asiática</b></Button>
            <Button variant="text" onClick={() => filterRestt("Hamburguer")}><b>Hamburguer</b></Button>
            <Button variant="text" onClick={() => filterRestt("Italiana")}><b>Italiana</b></Button>
            <Button variant="text" onClick={() => filterRestt("Carnes")}><b>Carnes</b></Button>
          </Stack>
        </div>
        <div>
          <di>
            {restaurantsFiltered ? renderL() : mapRest}
          </di>
          <di>
            <Navigation />
          </di>
        </div>
      </Grid>
    </di>

  )
}

export default FeedPage

// {mapRest ? mapRest : <p>erro</p>}

