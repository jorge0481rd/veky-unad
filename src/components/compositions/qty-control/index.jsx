import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";

const QtyControl = ({ qty, setQuantity, label = "" }) => {
  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <Button
        onClick={decreaseQuantity}
        disabled={qty <= 1}
        sx={{ minWidth: 30, padding: "4px" }}
      >
        <b>-</b>
      </Button>
      <Typography sx={{ mx: 1 }}>{qty}</Typography>{" "}
      <Button onClick={increaseQuantity} sx={{ minWidth: 30, padding: "4px" }}>
        <b>+</b>
      </Button>
    </Box>
  );
};

export default QtyControl;
