import React, { useEffect, useState } from 'react'

import { Button, Divider, Grid, Radio, RadioGroup, Typography } from '@mui/material'
import { Header } from '../../components/Header'
import Navigation from '../../components/Navigation'
import { CardProduct } from "../../components/CardProduct"

import useProtectedPage from '../../hooks/useProtectedPage'
import { useGlobalStates } from '../../global/GlobalState'
import { api } from '../../api'

const CartPage = () => {
  useProtectedPage();

  const [profile, setProfile] = useState({})
  const [money, setMoney] = useState(true)
  const [creditCard, setCreditCard] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState('money')
  const [activeOrder, setActiveOrder] = useState(false)
  const { carrinho } = useGlobalStates()

  const handlePaymentMethod = (e) => {
    if (e === 'creditcard') {
      setCreditCard(true)
      setMoney(false)
      setPaymentMethod('creditcard')
    } else if (e === 'money') {
      setCreditCard(false)
      setMoney(true)
      setPaymentMethod('money')
    }
  }

  const handlePlaceOrder = async () => {
    window.event.preventDefault()

    const products = carrinho.map((product) => {
      return { id: product.id, quantity: product.quantity }
    })

    try {
      await api.post(`/restaurants/${carrinho[0].restaurantId}/order`, {
        paymentMethod,
        products: products,
      })
      alert('Pedido realizado com sucesso!')
      carrinho.forEach(product => {
        product.quantity = 0
      })
      window.location.href = '/restaurantes'
    } catch (error) {
      alert("Já existe um pedido em andamento")
    }
  }

  const getActiveOrder = async () => {
    const response = await api.get('/active-order')
    try {
      setActiveOrder(response.data?.order?.length > 0 ? true : false)
    } catch (error) {
      alert(error.message)
    }
  }

  const getProfile = async () => {
    const response = await api.get("/profile")
    try {
      setProfile(response.data.user)
    } catch (error) {
      alert(error.message)
    }
  }

  useEffect(() => {
    getActiveOrder()
    getProfile()
    if (activeOrder) {
      alert('Você tem pedidos em andamento')
      return
    }
  }, [carrinho]);

  return (
    <Grid style={{ display: 'flex', flexDirection: 'column', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
      <Header text="Meu carrinho" style={{ width: '100%' }} />

      <Grid style={{ background: '#eeeeee', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'start', height: '76px', width: '360px', padding: '1rem' }}>
        <Typography style={{ color: '#b8b8b8' }} >
          Endereço de entrega
        </Typography>
        <Typography fontSize={16} style={{ marginTop: '8px' }}>
          {profile.address}
        </Typography>
      </Grid>

      {carrinho.length > 0 ? (
        <>
          <Grid direction="column" style={{ width: '100%', marginTop: '8px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            {carrinho.map((item, index) => (
              <CardProduct key={index} image={item.image} name={item.name} price={item.price} description={item.description} isProductCart />
            ))}
          </Grid>

          <Grid style={{ width: '100%', padding: '1rem' }}>

            <Typography style={{ display: 'flex', justifyContent: 'flex-end' }}>
              Frete R$ {carrinho[0]?.shipping}
            </Typography>

            <Grid style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px' }}>
              <Typography>
                SUBTOTAL
              </Typography>
              <Typography style={{ color: '#e86e5a' }}>
                R$ {carrinho.reduce((acc, item) => acc + item.price, 0)}
              </Typography>
            </Grid>

            <Grid style={{ width: '360px', marginTop: '25px' }}>
              <Typography>
                Forma de pagamento
              </Typography>
              <Divider />

              <Grid>
                <Grid style={{ display: 'flex', alignItems: 'center' }}>
                  <Radio checked={money} value={"money"} onClick={(e) => handlePaymentMethod(e.target.value)} />
                  <Typography>
                    Dinheiro
                  </Typography>
                </Grid>

                <Grid style={{ display: 'flex', alignItems: 'center' }}>
                  <Radio checked={creditCard} value={"creditcard"} onClick={(e) => handlePaymentMethod(e.target.value)} />
                  <Typography>
                    Cartão de crédito
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <Button onClick={handlePlaceOrder} style={{ background: '#e86e5a', color: 'black', width: '100%', marginTop: '19px' }}>
              Confirmar
            </Button>

          </Grid>
        </>
      ) : (
        <Grid style={{ width: '100%', height: '50vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <Typography>
            Seu carrinho está vazio :(
          </Typography>

          <Button variant='contained' style={{ background: '#e86e5a', marginTop: '0.5rem' }} onClick={
            () => {
              window.location.href = '/restaurantes'
            }
          }>
            Ir para home
          </Button>
        </Grid>
      )}

      <Navigation />
    </Grid>
  )
}

export default CartPage