import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import BottomNavigation from '@mui/material/BottomNavigation';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import { useHistory } from "react-router-dom";
import { goToFeed } from "../routes/coordinator";
import { goToCar } from "../routes/coordinator";
import { goToProfile } from "../routes/coordinator";
import { Box } from '@mui/material';



const Navigation = () => {
    const history = useHistory()
    return (
        <di>
            <Box sx={{ pb: 7 }}>
                <CssBaseline />
                <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                    <BottomNavigation
                        showLabels
                    >
                        <BottomNavigationAction onClick={() => goToFeed(history)} icon={<HomeIcon />} />
                        <BottomNavigationAction onClick={() => goToCar(history)} icon={<ShoppingCartIcon />} />
                        <BottomNavigationAction onClick={() => goToProfile(history)} icon={<PermIdentityIcon />} />
                    </BottomNavigation>
                </Paper>
            </Box>
        </di>

    )
}

export default Navigation