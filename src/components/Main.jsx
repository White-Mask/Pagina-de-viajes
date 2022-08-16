import React from 'react'

import { IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const Main = () => {
  return (
    <Box sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center", 
        height: "100vh"
      }}>
        <Typography variant='h1' sx={{
          fontSize: "4.5rem", 
          fontWeight: "bold",
          color: "#fff",
          textAlign:"center"
          }}
          >Explore <br/> the <span style={{color: "#5aff3d"}}>world</span>
        </Typography>

        <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
            >
          <ExpandMoreIcon sx={{fontSize:"4.5rem",color:"#fff"}}/>
        </IconButton>
    </Box>
  )
}