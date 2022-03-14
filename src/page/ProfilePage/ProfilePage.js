import React from "react"
import useProtectedPage from "../../hooks/useProtectedPage"
import { Header } from '../../components/Header'
import Navigation from '../../components/Navigation'
// import { ProfileStyle } from './styled';
// import { goToEdit } from "../../routes/coordinator";
import { useHistory } from "react-router-dom";
// import Edit from '../../images/edit.png'
import axios from "axios";
import { Base_url } from "../../constants/Urls";
import { useState, useEffect } from 'react';
// import {
//   Container,
//   InfoContainer,
//   StyledLink,
//   AddressContainer

// } from './styled';


const ProfilePage = () => {
  useProtectedPage()
  const [user, setUser] = useState({});
  const [hist, setHist] = useState([]);
  const history = useHistory();

  useEffect(() => {
    getProfile()
    getHistory()

  }, [])

  const getProfile = () => {

    axios
      .get(`${Base_url}/profile`,
        {
          headers: {
            auth: localStorage.getItem('token')
          }
        })
      .then((response) => {
        setUser(response.data.user)
      })
      .catch((err) => {
        alert(err.data)
      })
  }

  console.log(user)

  const getHistory = () => {

    axios
      .get(`${Base_url}/orders/history`,
        {
          headers: {
            auth: localStorage.getItem('token')
          }
        })
      .then((response) => {
        console.log(response.data.orders)
      })
      .catch((err) => {
        alert(err.data)
      })
  }

  return (
    <div>
      {/* {<Container> /} */}

        <Header text="Meu Perfil" />

        {/* {/ <PersonalInfoContainer> /} */}
        <p>{user.name}</p>
        <p>{user.email}</p>
        <p>{user.cpf}</p>

        {/* {/ <StyledLink to="/edicao - cadastro"> */}
        {/* <Edit fontSize="24px" /> */}
      {/* // </StyledLink> /} */}

      {/* {/ </InfoContainer > /} */}
    {/* // {/</Container >} */}

      <Navigation />
    </div>



  );
}

export default ProfilePage