import React from 'react'

//Css
import { Box } from "@mui/system";
import { Header } from "./components/Header";
import background from "./img/background.jpg";
import { Destinations } from './components/Destinations';
import { Footer } from './components/Footer';
import { Services } from './components/Services';
import { Main } from './components/Main';
import { CustomTheme } from './components/CustomTheme';

export const App = () => {
  return (
    <CustomTheme>
      <Box sx={{
        display: "flex",
        flexDirection: "column",
        backgroundImage: `url(${process.env.PUBLIC_URL+background})`,
        minHeight: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}>
        <Header/>
        <Main/>
        <Destinations/>
        <Services/>
        <Footer/>
      </Box>
    </CustomTheme>
  );
}
