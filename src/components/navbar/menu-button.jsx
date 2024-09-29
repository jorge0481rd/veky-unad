import { Box, Button, Slide } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Menu from "@mui/icons-material/Menu";
import { useState } from "react";
import classes from "./menu-button.module.css";

const MenuButton = (props, { openmenu }) => {
  return (
    <Box className={classes.menubutton} {...props}>
      <Button sx={{ minWidth: 30, padding: "4px", position: "relative" }}>
        <Slide direction="up" in={openmenu} mountOnEnter unmountOnExit>
          <ArrowBackIcon fontSize="large" sx={{ position: "absolute" }} />
        </Slide>
        <Slide direction="up" in={!openmenu} mountOnEnter unmountOnExit>
          <Menu fontSize="large" sx={{ position: "absolute" }} />
        </Slide>
      </Button>
    </Box>
  );
};

export default MenuButton;
