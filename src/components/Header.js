import React from 'react';

import { Grid, Typography } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export const Header = ({ text, icon }) => {

    return (
        <Grid style={{ borderBottom: '1px solid rgba(0, 0, 0, 0.25)', display: 'flex', height: '64px', alignItems: 'center', maxWidth: '360px', margin: '0 auto' }}>
            {icon && (
                <Grid>
                    <ArrowBackIosIcon />
                </Grid>
            )}

            <Grid style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <Typography>
                    {text}
                </Typography>
            </Grid>
        </Grid>
    );

}