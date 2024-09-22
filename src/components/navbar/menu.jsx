import React from "react";
import { MenuItem } from "@mui/material";

const Menu = ({ anchorEl, open, handleClose }) => {
  return (
    <Menu
      id="basic-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      MenuListProps={{
        "aria-labelledby": "menu-button",
      }}
    >
      <MenuItem onClick={null}>Profile</MenuItem>
      <MenuItem onClick={null}>My account</MenuItem>
      <MenuItem onClick={null}>Logout</MenuItem>
    </Menu>
  );
};

export default Menu;
