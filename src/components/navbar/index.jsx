import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import MenuButton from "./menu-button";
import classes from "./navbar.module.css";
import Menu from "./menu";
import { Link } from "react-router-dom";
import ROUTES from "../../constants/routes";
import { checkIsMobile } from "../../utils/checkIsMobile";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/actions/authActions";

const Navbar = () => {
  const [openmenu, setOpenMenu] = useState(false);
  const isMobile = checkIsMobile();
  const dispatch = useDispatch()
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const email = useSelector((state) => state.auth.user?.email);
  const username = email?.split("@")[0]



  return (
    <Box
      id="navbar"
      className={classes.navbar}
      sx={{
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
          position: "relative",
          height: "50px"
        }}
      >
        <MenuButton
          openmenu={openmenu}
          onClick={() => setOpenMenu((prev) => !prev)}
          sx={{ padding: 0, margin: 0, borderRadius: "100px" }}
        />

        <Box id="navbar-logo-container"
          sx={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <Link to="/" style={{ flex: "0 1 30%" }}>
            <img
              className={classes.logomobile}
              src="/logo-mobile.png"
              alt="veky logo"
              width={250}
            />
          </Link>
        </Box>

        {
          !isAuthenticated && <Link to="/login">Iniciar sesión</Link>
        }
        {isAuthenticated && (<Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            position: "absolute",
            right: 0,
            top: 0
          }}
        >
          <Typography>¡Hola, {username.split("@")[0]}!</Typography>
          <Typography
            onClick={() => dispatch(logout())}
            to=""
            color="primary" sx={{
              fontWeight: "bold",
              fontSize: "0.8rem",
              cursor: "pointer"
            }}>Salir</Typography>
        </Box>)}

        <Menu open={openmenu} setOpen={setOpenMenu} />
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
            <Link key={item.path} to={item.path}>
              {item.caption}
            </Link>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default Navbar;
