import React, { useState } from "react";
import { Box, TextField, Button, Snackbar, Alert } from "@mui/material";
import MyContainer from "../../compositions/my-container";
import useMyContext from "../../../context/useMyContext";
import { loginUser } from "../../../api/index";
import { useHistory } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import { useDispatch } from "react-redux";
import { login } from "../../../redux/actions/authActions";

const Login = () => {
  const [email, setEmail] = useState("fulano@gmail.com   ");
  const [password, setPassword] = useState("moreno81");
  const [message, setMessage] = useState("");
  const { setTitle } = useMyContext();
  const history = useHistory();
  const dispatch = useDispatch()



  setTitle("Iniciar sesión");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const data = await loginUser(email.trim(), password);
      dispatch(login({ email }));
      setMessage("Inicio de sesión exitoso");
      setEmail("");
      setPassword("");
      history.push("/");
    } catch (error) {
      setMessage(error.message);
    }
  };


  return (
    <MyContainer id="login">
      <Box sx={{ maxWidth: 400, mx: "auto", mt: 5 }}>
        <PersonIcon
          sx={{
            fontSize: "5rem",
            color: "grey",
            width: "100%",
          }}
        />
        <form onSubmit={handleLogin}>
          <TextField
            fullWidth
            margin="normal"
            label="Correo Electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Contraseña"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Iniciar Sesión
          </Button>
        </form>
        <Button
          onClick={() => {
            history.push("/register");
          }}
          color="inherit"
          size="small"
        >
          ¿No tienes cuenta? Regístrate aquí.
        </Button>
        {message && (
          <Snackbar
            open={Boolean(message)}
            autoHideDuration={6000}
            onClose={() => setMessage("")}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
          >
            <Alert
              onClose={() => setMessage("")}
              severity={
                message === "Inicio de sesión exitoso" ? "success" : "error"
              }
            >
              {message}
            </Alert>
          </Snackbar>
        )}
      </Box>
    </MyContainer>
  );
};

export default Login;
