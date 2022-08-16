import { Grid, Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export const Services = () => {
  return (
    <Box sx={{
        height: "100vh"
    }}>
        <Paper elevation={6} sx={{maxWidth: "75rem", padding: "3.123rem", margin: "4.5rem auto 0 auto"}}>
            <Typography variant='h4' sx={{textAlign:"center", marginBottom: "2rem"}}>Our Services</Typography>
            <Grid container spacing={3} alignContent="center">
                {/*Primera fila*/}

                <Grid item xs={4}>
                    <Paper elevation={6} sx={{width: "350px", height: "200px" ,padding: "2rem"}}>
                            <Typography variant='h6'>
                                Personalized Matching
                            </Typography>
                            <Typography variant='body1' sx={{marginTop: "1rem"}}>
                                We offer a wide variety of personally picked tours with destinations all over the globe.
                            </Typography>    
                    </Paper>
                </Grid>

                <Grid item xs={4}>
                    <Paper elevation={6} sx={{width: "350px", height: "200px" ,padding: "2rem"}}>
                            <Typography variant='h6'>
                                Wide Variety of Tours
                            </Typography>
                            <Typography variant='body1' sx={{marginTop: "1rem"}}>
                                We offer a wide variety of personally picked tours with destinations all over the globe.
                            </Typography>    
                    </Paper>
                </Grid>

                <Grid item xs={4}>
                    <Paper elevation={6} sx={{width: "350px", height: "200px" ,padding: "2rem"}}>
                            <Typography variant='h6'>
                                Highly Qualified Service
                            </Typography>
                            <Typography variant='body1' sx={{marginTop: "1rem"}}>
                                We offer a wide variety of personally picked tours with destinations all over the globe.
                            </Typography>    
                    </Paper>
                </Grid>
                {/*Segunda fila*/}

                <Grid item xs={4}>
                    <Paper elevation={6} sx={{width: "350px", height: "200px" ,padding: "2rem"}}>
                            <Typography variant='h6'>
                                24/7 Support
                            </Typography>
                            <Typography variant='body1' sx={{marginTop: "1rem"}}>
                                We offer a wide variety of personally picked tours with destinations all over the globe.
                            </Typography>    
                    </Paper>
                </Grid>

                <Grid item xs={4}>
                    <Paper elevation={6} sx={{width: "350px", height: "200px" ,padding: "2rem"}}>
                            <Typography variant='h6'>
                                Handpicked Hotels
                            </Typography>
                            <Typography variant='body1' sx={{marginTop: "1rem"}}>
                                We offer a wide variety of personally picked tours with destinations all over the globe.
                            </Typography>    
                    </Paper>
                </Grid>

                <Grid item xs={4}>
                    <Paper elevation={6} sx={{width: "350px", height: "200px" ,padding: "2rem"}}>
                            <Typography variant='h6'>
                                Best Price Guarantee
                            </Typography>
                            <Typography variant='body1' sx={{marginTop: "1rem"}}>
                                We offer a wide variety of personally picked tours with destinations all over the globe.
                            </Typography>    
                    </Paper>
                </Grid>

                
            </Grid>
            </Paper>
        </Box>
  )
}