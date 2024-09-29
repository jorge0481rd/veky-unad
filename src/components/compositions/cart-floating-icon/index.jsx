import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Badge, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";
import styled, { keyframes } from "styled-components";
import { tada } from "react-animations";

const tadaAnimation = keyframes`${tada}`;

const IconContainer = styled.div`
  &.animate {
    animation: 1s ${tadaAnimation} ease-in-out;
  }
`;

const FloatingCart = () => {
  const history = useHistory();
  const items = useSelector((state) => state.cart.items);
  const itemCount = items.length;

  const [isAnimating, setIsAnimating] = useState(false);

  const handleCartClick = () => {
    if (history.location.pathname === "/cart") {
      history.push("/products");
    } else {
      history.push("/cart");
    }
  };

  useEffect(() => {
    setIsAnimating(true);
    const timeout = setTimeout(() => setIsAnimating(false), 2000);

    return () => clearTimeout(timeout);
  }, [itemCount]);

  return (
    <div
      id="cart-floating-icon"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 1000,
        background: "#bcedff",
        opacity: 0.8,
        borderRadius: "50%",
      }}
    >
      <Badge badgeContent={itemCount} color="primary">
        <IconContainer className={isAnimating ? "animate" : ""}>
          <IconButton
            onClick={handleCartClick}
            color="inherit"
            aria-label="cart"
            sx={{ boxShadow: 3 }}
          >
            <ShoppingCartIcon fontSize="large" />
          </IconButton>
        </IconContainer>
      </Badge>
    </div>
  );
};

export default FloatingCart;
