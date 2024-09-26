import React, { useState } from "react";
import useMyContext from "../../../context/useMyContext";
import {
  Typography,
  Box,
  Grid,
  Paper,
  TextField,
  Button,
  Link,
  Snackbar,
  Alert,
} from "@mui/material";
import MyContainer from "../../compositions/my-container";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [feedback, setFeedback] = useState({
    open: false,
    message: "",
    severity: "",
  });
  const { setTitle } = useMyContext();
  setTitle("Contáctanos");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch("YOUR_BACKEND_API/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      setName("");
      setEmail("");
      setMessage("");
      setFeedback({
        open: true,
        message: "Mensaje enviado con éxito!",
        severity: "success",
      });
    } catch (error) {
      setFeedback({
        open: true,
        message: "Error al enviar el mensaje. Inténtalo de nuevo.",
        severity: "error",
      });
    }
  };

  return (
    <MyContainer id="contact">
      <Typography variant="h6" align="center" paragraph>
        Estamos aquí para ayudarte. No dudes en comunicarte con nosotros.
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: 3 }}>
            <Typography variant="h6" gutterBottom>
              Información de Contacto
            </Typography>
            <Typography variant="body1">
              <strong>Teléfono (WhatsApp):</strong> 1-809-802-5648
            </Typography>
            <Typography variant="body1">
              <strong>Correo Electrónico:</strong>{" "}
              <Link href="mailto:contacto@vekyrd.com">vekyrd@gmail.com</Link>
            </Typography>
            <Typography variant="body1">
              <strong>Instagram:</strong>{" "}
              <Link href="https://instagram.com/vekyrd" target="_blank">
                @vekyrd
              </Link>
            </Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              <strong>Disponibilidad:</strong> Estamos disponibles a través de
              WhatsApp todo el tiempo, dentro de un horario razonable.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: 3 }}>
            <Typography variant="h6" gutterBottom>
              Horario de Atención
            </Typography>
            <Typography variant="body1">
              Lunes a Viernes: 9:00 AM - 6:00 PM
            </Typography>
            <Typography variant="body1">Sábado: 10:00 AM - 2:00 PM</Typography>
            <Typography variant="body1">Domingo: Cerrado</Typography>
          </Paper>
        </Grid>
      </Grid>

      <Box sx={{ mx: "auto", mt: 5, maxWidth: 500 }}>
        <Typography variant="h6" align="center" gutterBottom>
          Envíanos un Mensaje
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            margin="normal"
            label="Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Correo Electrónico"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Mensaje"
            multiline
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Enviar Mensaje
          </Button>
        </form>
      </Box>

      <Snackbar
        open={feedback.open}
        autoHideDuration={6000}
        onClose={() => setFeedback({ ...feedback, open: false })}
      >
        <Alert
          onClose={() => setFeedback({ ...feedback, open: false })}
          severity={feedback.severity}
        >
          {feedback.message}
        </Alert>
      </Snackbar>
    </MyContainer>
  );
};

export default Contact;
