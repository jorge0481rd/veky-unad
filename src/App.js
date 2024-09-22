import React from "react";
import { Box, createTheme, ThemeProvider, Typography } from "@mui/material";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import "./index.css";
import "./reset.css";

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
                <Typography>Home</Typography>
              </Route>
              <Route path="/about">
                <Typography>About</Typography>
              </Route>
              <Route path="/contact">
                <Typography>Contact</Typography>
              </Route>
            </Switch>
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
