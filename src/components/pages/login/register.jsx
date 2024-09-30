import React, { useState } from "react";
import { Box, TextField, Button, Snackbar, Alert } from "@mui/material";
import MyContainer from "../../compositions/my-container";
import useMyContext from "../../../context/useMyContext";
import { registerUser } from "../../../api/index";
import { useHistory } from "react-router-dom";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const { setTitle } = useMyContext();
  const history = useHistory();

  setTitle("Registrarse");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const data = await registerUser(email, password);
      setMessage(`Usuario registrado: ${data.email}`);
      setEmail("");
      setPassword("");
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <MyContainer id="register">
      <Box sx={{ maxWidth: 400, mx: "auto", mt: 5 }}>
        <PersonAddIcon
          sx={{
            fontSize: "5rem",
            color: "grey",
            width: "100%",
            transform: "rotateY(180deg)",
          }}
        />
        <form onSubmit={handleRegister}>
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
            Registrarse
          </Button>
        </form>
        <Button
          onClick={() => {
            history.push("/login");
          }}
          color="inherit"
        >
          ¿Ya tienes cuenta? Inicia sesión aquí.
        </Button>
        {message && (
          <Snackbar
            open={Boolean(message)}
            autoHideDuration={6000}
            onClose={() => setMessage("")}
          >
            <Alert
              onClose={() => setMessage("")}
              severity={
                message.includes("Usuario registrado") ? "success" : "error"
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

export default Register;
