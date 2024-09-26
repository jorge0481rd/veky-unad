import React from "react";
import { Box, Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box
      id="footer"
      sx={{
        bgcolor: "primary.main",
        color: "white",
        p: 2,
        position: "relative",
        bottom: 0,
        width: "100%",
        textAlign: "center",
        mt: 6,
        alignSelf: "flex-end",
      }}
    >
      <Box
        id="footer-stripe"
        sx={{
          bgcolor: "primary.main",
          filter: "brightness(80%)",
          position: "absolute",
          top: 0,
          left: 0,
          height: 10,
          width: "100%",
        }}
      ></Box>
      <Typography variant="body2">
        © {new Date().getFullYear()} VekyRD. Todos los derechos reservados.
      </Typography>
      <Typography variant="body2">
        <strong>Teléfono (WhatsApp):</strong> 1-809-802-5648
      </Typography>
      <Typography variant="body2">
        <strong>Correo Electrónico:</strong>{" "}
        <Link href="mailto:contacto@vekyrd.com" color="inherit">
          vekyrd@gmail.com
        </Link>
      </Typography>
      <Typography variant="body2">
        <strong>Instagram:</strong>{" "}
        <Link
          href="https://instagram.com/vekyrd"
          target="_blank"
          color="inherit"
        >
          @vekyrd
        </Link>
      </Typography>
      <Typography variant="body2">
        <Link href="/about" color="inherit">
          Acerca de Nosotros
        </Link>{" "}
        |{" "}
        <Link href="/contact" color="inherit">
          Contáctanos
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;
