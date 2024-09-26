import React from "react";
import { useHistory } from "react-router-dom";
import { Badge, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const FloatingCart = ({ itemCount }) => {
  const history = useHistory();

  const handleCartClick = () => {
    history.push("/cart");
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 1000,
        background: "#ffffff",
        opacity: 0.8,
        borderRadius: "50%",
      }}
    >
      <Badge badgeContent={itemCount} color="primary">
        <IconButton
          onClick={handleCartClick}
          color="inherit"
          aria-label="cart"
          sx={{ boxShadow: 3 }}
        >
          <ShoppingCartIcon fontSize="large" />
        </IconButton>
      </Badge>
    </div>
  );
};

export default FloatingCart;
