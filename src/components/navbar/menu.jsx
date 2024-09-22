import React from "react";
import {
  Box,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  Paper,
} from "@mui/material";
import { Link } from "react-router-dom";

const Menu = ({ open, setOpen }) => {
  return (
    <Box
      onClick={() => setOpen(false)}
      sx={{
        position: "fixed",
        width: open ? "100%" : "0%",
        height: open ? "100%" : "0%",
        top: 0,
        left: 0,
      }}
    >
      <Paper
        sx={{
          width: 320,
          height: "100%",
          maxHeight: "80%",
          maxWidth: "100%",
          transform: `translateX(${open ? 0 : -110}%)`,
          boxShadow: "2px 2px 2px 2px #dedede",
          position: "fixed",
          left: 0,
          top: 85,
          zIndex: 100,
          transition: "all 200ms ease-in-out",
        }}
      >
        <MenuList>
          <Link to="/products">
            <MenuItem>
              <ListItemText>Productos</ListItemText>
            </MenuItem>
          </Link>
          <Link to="/recommendations">
            <MenuItem>
              <ListItemText>Recomendaciones</ListItemText>
            </MenuItem>
          </Link>
          <Link to="/about">
            <MenuItem>
              <ListItemText>Nosotros</ListItemText>
            </MenuItem>
          </Link>
          <Link to="/contact">
            <MenuItem>
              <ListItemText>Contacto</ListItemText>
            </MenuItem>
          </Link>
        </MenuList>
      </Paper>
    </Box>
  );
};

export default Menu;

/*
Menú de navegación principal con enlaces a "Inicio", "Productos", "Recomendaciones", "Sobre Nosotros", "Contacto", "Mi cuenta".

*/
