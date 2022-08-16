import React from 'react'

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
    typography: {
        fontFamily: "Montserrat"
    }
  });

export const CustomTheme = (props) => {
  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        {props.children}
    </ThemeProvider >
  )
}