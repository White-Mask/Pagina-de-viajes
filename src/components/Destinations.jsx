import { Grid, Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

import Imagen from "../img/Imagen1.jpg";

export const Destinations = () => {
  return (
    <Box sx={{
        display: "flex",
        justifyContent: "center",
        height: "100vh"
    }}>
            <Paper elevation={6} sx={{width: "975px", height: "600px", marginTop: "4.5rem"}}>
                <Grid container alignItems="center">
                    <Grid item xs={6}>
                        <img src={Imagen} alt='' style={{width: "500px", height: "auto", padding: "2rem"}}/>
                    </Grid>

                    <Grid item xs={6} sx={{padding: "2rem"}}>
                        <Typography variant='h4'>
                            Discover New Horizons
                        </Typography>
                        <Typography variant='body1' sx={{marginTop: "1rem"}}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem cumque earum, quas laudantium exercitationem accusamus sunt ut tempore quo illum provident excepturi, corrupti dolores magni id deleniti in cupiditate harum!
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
        </Box>
  )
}