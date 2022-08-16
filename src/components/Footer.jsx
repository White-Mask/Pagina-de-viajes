import { Grid, Link, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#000", color: "#fff"}}>
        <Grid container justifyContent="space-around" sx={{padding: "3.123rem"}}>
            {/*Columna 1*/}
            <Grid item>
                <Typography variant='h6'>Contactanos</Typography>
                <Box sx={{display: "flex", flexDirection: "column",maxWidth: "12.5rem"}}>
                    <Box sx={{padding: "0.5rem 0"}}><Link href="#" underline="hover" color="#ff0">+56 22-913-4688</Link></Box>
                    <Box sx={{padding: "0.5rem 0"}}><Link href="#" underline="hover" color="#ff0">info@tryppy.com</Link></Box>
                    <Box sx={{padding: "0.5rem 0"}}><Link href="#" underline="hover" color="#ff0">Av. Presidente Riesco 5711, Las Condes, Santiago de Chile</Link></Box>
                </Box>
            </Grid>

            {/*Columna 2*/}
            <Grid item>
                <Typography variant='h6'>Acerca de Nosotros</Typography>
                <Box sx={{display: "flex", flexDirection: "column"}}>
                    <Box sx={{padding: "0.5rem 0"}}><Link href="#" underline="hover" color="#ff0">Quiénes somos</Link></Box>
                    <Box sx={{padding: "0.5rem 0"}}><Link href="#" underline="hover" color="#ff0">Sala de prensa</Link></Box>
                    <Box sx={{padding: "0.5rem 0"}}><Link href="#" underline="hover" color="#ff0">Sostenibilidad</Link></Box>
                </Box>
            </Grid>

            {/*Columna 3*/}
            <Grid item>
                <Typography variant='h6'>Información legal</Typography>

                <Box sx={{display: "flex", flexDirection: "column"}}>
                    <Box sx={{padding: "0.5rem 0"}}><Link href="#" underline="hover" color="#ff0">Términos de uso</Link></Box>
                    <Box sx={{padding: "0.5rem 0"}}><Link href="#" underline="hover" color="#ff0">Conoce tus derechos</Link></Box>
                    <Box sx={{padding: "0.5rem 0"}}><Link href="#" underline="hover" color="#ff0">Devolución de tasas de embarque</Link></Box>
                    <Box sx={{padding: "0.5rem 0"}}><Link href="#" underline="hover" color="#ff0">Condiciones de contrato de transporte</Link></Box>
                </Box>
            </Grid>

            {/*Columna 4*/}
            <Grid item>
                <Typography variant='h6'>Explorar</Typography>
                <Box sx={{display: "flex", flexDirection: "column"}}>
                    <Box sx={{padding:"0.5rem 0"}}><Link href="#" underline="hover" color="#ff0">Prepara tu viaje</Link></Box>
                    <Box sx={{padding:"0.5rem 0"}}><Link href="#" underline="hover" color="#ff0">Destinos</Link></Box>
                </Box>
                
            </Grid>
        </Grid>

        {/*Copyright*/}
        <Box sx={{marginTop: "1.25rem", textAlign: "center"}}>
            <Typography variant='subtitle2'>© 2022 Trippy LLC Todos los derechos reservados.</Typography>
        </Box>
    </Box>
  )
}