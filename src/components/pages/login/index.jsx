import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Snackbar,
  Alert,
} from "@mui/material";
import MyContainer from "../../compositions/container";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("user@example.com");
  const [password, setPassword] = useState("password123");
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    // Mock authentication
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
    <MyContainer sx={{ maxWidth: 400, mx: "auto", mt: 5 }}>
      <Typography variant="h5">Iniciar Sesión</Typography>
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
    </MyContainer>
  );
};

export default Login;
