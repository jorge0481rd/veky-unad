import React from "react";
import { Box, createTheme, ThemeProvider, Typography } from "@mui/material";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import "./index.css";
import "./reset.css";
import Home from "./components/pages/home/home";
import About from "./components/pages/abouut/about";
import Contact from "./components/pages/contact/contact";
import Products from "./components/pages/products/products";

const theme = createTheme({
  palette: {
    primary: {
      main: "#73473D",
    },
    secondary: {
      main: "#F294A5",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Box className="App">
          <Navbar />
          <Box className="content">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/products">
                <Products />
              </Route>
            </Switch>
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
