import React, { useState } from "react"

import { Button, Grid, Typography, Modal, Select, MenuItem } from "@mui/material";
import { useGlobalSetters } from "../global/GlobalState";
import { useGlobalStates } from "../global/GlobalState";

export const CardProduct = ({ name, image, price, description, idProduct, restaurantId, isProductCart, shipping }) => {
  const [open, setOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const { setCarrinho } = useGlobalSetters();
  const { carrinho } = useGlobalStates()

  const product = {
    id: idProduct,
    name: name,
    image: image,
    price: price,
    description: description,
    quantity: quantity,
    restaurantId: restaurantId,
    shipping: shipping,
  }

  const removeItemToCart = () => {
    const newCarrinho = carrinho.filter(product => product.id !== idProduct)
    setCarrinho(newCarrinho)
  }

  const handleQuantity = (quantityProduct) => {
    setQuantity(quantityProduct);
  }

  const handleOpenModal = () => {
    setOpen(true);
  };

  const addToCart = async () => {
    const copyCart = [...carrinho];
    await setCarrinho([...copyCart, product]);
    setOpen(false);
  }

  return (
    <Grid style={{ display: 'flex', width: '328px', height: '125px', border: '1px solid #b8b8b8', borderRadius: '8px', marginTop: '8px' }}>
      <Grid>
        <img src={image} alt={name} style={{ width: '97px', height: '125px', borderRadius: '8px 0 0 8px' }} />
      </Grid>

      <Grid style={{ marginLeft: '16px', marginTop: '10px', minWidth: '200px' }}>
        <Typography fontSize="16px" style={{ color: '#e86e5a' }}>
          {name}
        </Typography>

        <Typography fontSize="14px" style={{ color: '#b8b8b8' }}>
          {description}
        </Typography>

        <Grid style={{ display: 'flex' }}>
          <Typography fontSize="16px">
            R$ {price.toFixed(2)}
          </Typography>
        </Grid>
      </Grid>

      {isProductCart ? (
        <Button style={{ marginLeft: '-96px', marginTop: 'auto', minWidth: '110px', border: '1px solid', borderRadius: '8px 0 8px 0', fontSize: '12px', color: '#e86e5a' }} onClick={removeItemToCart}>
          Remover
        </Button>
      ) :
      (
        <Button style={{ marginLeft: '-96px', marginTop: 'auto', minWidth: '110px', border: '1px solid', borderRadius: '8px 0 8px 0', fontSize: '12px', color: 'black' }} onClick={handleOpenModal}>
          Adicionar
        </Button>
      )}

      <Modal open={open} onClose={() => setOpen(false)} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Grid style={{ display: 'flex', flexDirection: 'column', width: '328px', height: '216px', justifyContent: 'center', alignItems: 'center', background: '#fff', padding: '2rem' }}>
          <Typography>
            Selecione a quatidade desejada
          </Typography>

          <Select fullWidth style={{ marginTop: '1rem' }} onChange={(e) => handleQuantity(e.target.value)} >
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={6}>6</MenuItem>
            <MenuItem value={7}>7</MenuItem>
            <MenuItem value={8}>8</MenuItem>
            <MenuItem value={9}>9</MenuItem>
            <MenuItem value={10}>10</MenuItem>
          </Select>

          <Button style={{ border: 'none', marginTop: '2rem', alignSelf: 'end' }} onClick={addToCart}>
            Adicionar ao carrinho
          </Button>
        </Grid>
      </Modal>


    </Grid>
  );
}