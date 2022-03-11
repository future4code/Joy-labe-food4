import React from 'react';

import { Grid, Typography } from '@mui/material';

export const CardRestaurantDetail = ({ image, name, address, category, shippingValue, deliveryTime }) => {

  return (
    <Grid container style={{ width: '328px', display: 'flex', marginTop: '1rem' }}>
      <Grid item style={{ width: '100%', borderRadius: '8px' }}>
          <img src={image} alt={name} style={{ width: '100%', height: '120px', borderRadius: '8px 8px 0 0' }} />
      </Grid>
      <Grid item style={{ width: '100%', padding: '0 16px' }}>
          <Grid item container direction="column" style={{ width: '100%' }}>
              <Typography fontSize="16px" style={{ color: '#e86e5a' }}>
                  {name}
              </Typography>

              <Typography fontSize="16px" style={{ color: '#b8b8b8', margin: '8px 0' }}>
                  {category}
              </Typography>
          </Grid>
          <Grid style={{ display: 'flex', width: '100%', margin: '8px 0' }}>
              <Typography fontSize="16px" style={{ color: '#b8b8b8' }}>
                  {deliveryTime} min
              </Typography>
              <Typography fontSize="16px" style={{ color: '#b8b8b8', marginLeft: '2rem' }}>
                  Frete R$ {shippingValue}
              </Typography>
          </Grid>

          <Grid>
              <Typography fontSize="16px" style={{ color: '#b8b8b8' }}>
                  {address}
              </Typography>
          </Grid>
      </Grid>
    </Grid>
  );
}
