import { Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import MenuButton from "./menu-button";
import classes from "./navbar.module.css";
import Menu from "./menu";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [translateValue, setTranslateValue] = useState(0);

  useEffect(() => {
    setTranslateValue(openMenu ? 0 : -40);
  }, [openMenu]);

  return (
    <Box className={classes.navbar} bgcolor="#dedede">
      <Button
        onClick={() => setOpenMenu((prev) => !prev)}
        sx={{ padding: 0, margin: 0, borderRadius: "100px" }}
      >
        <MenuButton translateValue={translateValue} />
      </Button>
      <img
        className={classes.logomobile}
        src="/logo-mobile.png"
        alt="veky logo"
      />

      <Menu open={openMenu} setOpen={setOpenMenu} />
    </Box>
  );
};

export default Navbar;
