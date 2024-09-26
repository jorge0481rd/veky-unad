import { Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import MenuButton from "./menu-button";
import classes from "./navbar.module.css";
import Menu from "./menu";
import { Link } from "react-router-dom";
import ROUTES from "../../constants/routes";
import { checkIsMobile } from "../../utils/checkIsMobile";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [positionValue, setPositionValue] = useState(0);
  const isMobile = checkIsMobile();

  useEffect(() => {
    setPositionValue(openMenu ? 0 : -40);
  }, [openMenu]);

  return (
    <Box
      id="navbar"
      className={classes.navbar}
      sx={{
        background:
          "linear-gradient(180deg, rgba(222,222,222,1) 0%, rgba(255,255,255,1) 53%, rgba(255,255,255,1) 100%)",
        padding: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <Box
        className="navbar-row navbar-row-1"
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Button
          onClick={() => setOpenMenu((prev) => !prev)}
          sx={{ padding: 0, margin: 0, borderRadius: "100px" }}
        >
          <MenuButton positionValue={positionValue} />
        </Button>
        <Link to="/" style={{ flex: "0 1 30%" }}>
          <img
            className={classes.logomobile}
            src="/logo-mobile.png"
            alt="veky logo"
          />
        </Link>

        <Link to="/login">Iniciar sesión</Link>

        <Menu open={openMenu} setOpen={setOpenMenu} />
      </Box>
      {!isMobile && (
        <Box
          className="navbar-row navbar-row-2"
          sx={{
            display: "flex",
            gap: 2,
            fontSize: "0.9rem",
          }}
        >
          {Object.values(ROUTES).map((item) => (
            <Link to={item.path}>{item.caption}</Link>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default Navbar;
