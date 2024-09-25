import { Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import MenuButton from "./menu-button";
import classes from "./navbar.module.css";
import Menu from "./menu";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [positionValue, setPositionValue] = useState(0);

  useEffect(() => {
    setPositionValue(openMenu ? 0 : -40);
  }, [openMenu]);

  return (
    <Box
      className={classes.navbar}
      sx={{
        background:
          "linear-gradient(180deg, rgba(222,222,222,1) 0%, rgba(255,255,255,1) 53%, rgba(255,255,255,1) 100%)",
        padding: 1,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Button
        onClick={() => setOpenMenu((prev) => !prev)}
        sx={{ padding: 0, margin: 0, borderRadius: "100px" }}
      >
        <MenuButton positionValue={positionValue} />
      </Button>
      <Link to="/">
        <img
          className={classes.logomobile}
          src="/logo-mobile.png"
          alt="veky logo"
        />
      </Link>

      <Link to="/login">Iniciar sesión</Link>

      <Menu open={openMenu} setOpen={setOpenMenu} />
    </Box>
  );
};

export default Navbar;
