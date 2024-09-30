import React from "react";
import { Box, createTheme, ThemeProvider } from "@mui/material";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar/";
import "./reset.css";
import Home from "./components/pages/home/";
import About from "./components/pages/about/";
import Contact from "./components/pages/contact/";
import Products from "./components/pages/products/";
import TitleBar from "./components/compositions/title-bar/";
import { MyContextProvider } from "./context/MyContext";
import Cart from "./components/pages/cart/";
import { Provider as ReduxProvider } from "react-redux";
import store from "./redux/store";
import Login from "./components/pages/login";
import Footer from "./components/footer";
import FloatingCart from "./components/compositions/cart-floating-icon";
import Register from "./components/pages/login/register";

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
  const mockLogin = () => console.log("Inicio de sesion exitoso");
  return (
    <MyContextProvider>
      <ThemeProvider theme={theme}>
        <ReduxProvider store={store}>
          <Router>
            <Box
              className="App"
              sx={{
                display: "flex",
                flexDirection: "column",
                flexGrow: 1,
                height: "100vh",
              }}
            >
              <Navbar />
              <TitleBar caption="caption" />
              <FloatingCart itemCount={5} />
              <Box className="content" sx={{ flex: 1 }}>
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
                  <Route path="/cart">
                    <Cart />
                  </Route>
                  <Route path="/login">
                    <Login onLogin={mockLogin} />
                  </Route>
                  <Route path="/register">
                    <Register />
                  </Route>
                </Switch>
              </Box>
              <Footer />
            </Box>
          </Router>
        </ReduxProvider>
      </ThemeProvider>
    </MyContextProvider>
  );
}

export default App;
