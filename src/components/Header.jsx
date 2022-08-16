import React from 'react'

//css
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Typography } from '@mui/material';

export const Header = () => {
  return (
    <AppBar sx={{background: "none", boxShadow: "none"}}> {/*backgroundColor: "rgba(0, 0, 0, .2)"*/}
        <Toolbar sx={{displey: "flex", justifyContent: "space-between", width:"75rem", margin: "0 auto"}}>
            <Typography variant="h3">Trip<span style={{color: "#5aff3d"}}>py</span></Typography>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
            >
                <MenuIcon sx={{fontSize:"2.5rem",color:"#fff"}}/>
            </IconButton>
        </Toolbar>
      </AppBar>
    )
}