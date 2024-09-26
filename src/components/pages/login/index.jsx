import React, { useState } from "react";
import { Box, TextField, Button, Snackbar, Alert } from "@mui/material";
import MyContainer from "../../compositions/my-container";
import useMyContext from "../../../context/useMyContext";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("user@gmail.com");
  const [password, setPassword] = useState("moreno81");
  const [error, setError] = useState(null);
  const { setTitle } = useMyContext();
  setTitle("Iniciar sesión");

  const handleLogin = async (e) => {
    e.preventDefault();

    if (email === "user@gmail.com" && password === "moreno81") {
      onLogin({ email });
      setEmail("");
      setPassword("");
      setError(null);
    } else {
      setError("Credenciales incorrectas.");
    }
  };

  return (
    <MyContainer id="login">
      <Box sx={{ maxWidth: 400, mx: "auto", mt: 5 }}>
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
        {error && (
          <Snackbar open={true} autoHideDuration={6000}>
            <Alert severity="error">{error}</Alert>
          </Snackbar>
        )}
      </Box>
    </MyContainer>
  );
};

export default Login;
