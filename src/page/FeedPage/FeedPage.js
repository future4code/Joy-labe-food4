import axios from "axios";
import React, { useContext, useEffect, useState } from "react"
import { CardRestaurant } from '../../components/CardRestaurant';
import { Base_url } from "../../constants/Urls";
import { goToResult } from "../../routes/coordinator";
import GlobalContext from '../../global/GlobalContext';
import { useHistory } from "react-router-dom";
import Navigation from "../../components/Navigation";
import { Header } from "../../components/Header";
import { Tab } from "./styled";
import { Tabs } from "./styled";
import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment, Box, TextField, Typography, Grid } from '@mui/material';
import useProtectedPage from "../../hooks/useProtectedPage";

const FeedPage = () => {
  useProtectedPage()
  const [value, setValue] = React.useState(0);
  const [restaurantsFiltered, setRestaurantsFiltered] = useState([])
  const [text, setText] = useState('')
  const { states, setters } = useContext(GlobalContext)
  const { rest } = states
  const { setRest } = setters
  const history = useHistory()
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  useEffect(() => {
    getRest()
  }, [restaurantsFiltered])
  console.log(rest)
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
      setText('Não encontramos :(')
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

  console.log(value)
  return (
    <di>
      <di>
        <Header text="Home" />
      </di>
      <Grid style={{ display: 'flex', flexDirection: 'column', maxWidth: '360px', margin: '0 auto' }}>
        <div>
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
          <Box sx={{ maxWidth: 480, bgcolor: 'background.paper' }}>
            <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons={false}
              aria-label="scrollable prevent tabs example"
            >
              <Tab label="Árabe" value="Árabe" onClick={() => filterRestt("Árabe")} >Árabe</Tab>
              <Tab label="Asiática" value="Asiática" onClick={() => filterRestt("Asiática")} >Asiática</Tab>
              <Tab label="Hamburguer" value="Hamburguer" onClick={() => filterRestt("Hamburguer")} >Hamburguer</Tab>
              <Tab label="Italiana" value="Italiana" onClick={() => filterRestt("Italiana")} >Italiana</Tab>
              <Tab label="Carnes" value="Carnes" onClick={() => filterRestt("Carnes")} >Carnes</Tab>
              <Tab label="Sorvetes" value="Sorvetes" onClick={() => filterRestt("Sorvetes")} >Sorvetes</Tab>
              <Tab label="Baiana" value="Baiana" onClick={() => filterRestt("Baiana")} >Baiana</Tab>
              <Tab label="Petiscos" value="Petiscos" onClick={() => filterRestt("Petiscos")} >Petiscos</Tab>
              <Tab label="Mexicana" value="Mexicana" onClick={() => filterRestt("Mexicana")} >Mexicana</Tab>
            </Tabs>
          </Box>
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

