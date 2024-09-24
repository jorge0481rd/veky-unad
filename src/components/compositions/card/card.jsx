import { Box, Button, Card, Tooltip, Typography } from "@mui/material";
import React, { useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import productImg from "./product_img.jpg";

const ProductCard = ({ info }) => {
  const [selected, setSelected] = useState(false);
  const [quantity, setQuantity] = useState(1); // State to track quantity
  const { description, price } = info;

  const toggleSelected = () => {
    setSelected((prev) => !prev);
  };

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <Card
      sx={{
        width: 250,
        margin: 1,
        padding: 1,
        display: "flex",
        flexDirection: "column",
        gap: 1,
        cursor: "pointer",
      }}
    >
      <img src={productImg} alt="producto" width={250} height={300} />
      <Tooltip title={description} arrow>
        <Typography
          sx={{
            display: "-webkit-box",
            overflow: "hidden",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 2,
            lineHeight: 1.2,
            height: "2.4em",
          }}
        >
          {description}
        </Typography>
      </Tooltip>
      <Box
        className="card-info"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography>
          <b>${price}</b>
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            onClick={decreaseQuantity}
            disabled={quantity <= 1}
            sx={{ minWidth: 30, padding: "4px" }}
          >
            <b>-</b>
          </Button>
          <Typography sx={{ mx: 1 }}>{quantity}</Typography>{" "}
          <Button
            onClick={increaseQuantity}
            sx={{ minWidth: 30, padding: "4px" }}
          >
            <b>+</b>
          </Button>
        </Box>

        <Button onClick={toggleSelected} sx={{ minWidth: 30, padding: "4px" }}>
          {selected ? (
            <CheckCircleIcon sx={{ color: "green" }} />
          ) : (
            <AddShoppingCartIcon />
          )}
        </Button>
      </Box>
    </Card>
  );
};

export default ProductCard;
