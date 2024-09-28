import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Box, Button, Card, Slide, Tooltip, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../../redux/actions/cartActions";
import productImg from "./product_img.jpg";
import QtyControl from "../qty-control";

const ProductCard = ({ info, isSelected }) => {
  const [selected, setSelected] = useState(isSelected);
  const { id, name, price } = info;
  const dispatch = useDispatch();

  const toggleSelected = () => {
    if (!selected) {
      const product = {
        ...info,
        selected,
      };

      dispatch(addToCart(product));
    } else {
      dispatch(removeFromCart(info.id));
    }
    setSelected((prev) => !prev);
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
        position: "relative",
        outline: selected ? "solid 2px green" : "none",
      }}
    >
      <img
        onClick={toggleSelected}
        src={productImg}
        alt="producto"
        width={250}
        height={300}
      />
      <Tooltip title={name} arrow placement="top">
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
          {name}
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

        <Slide direction="up" in={selected} timeout={400}>
          <div>
            <QtyControl prodId={id} />
          </div>
        </Slide>
        <Button
          onClick={toggleSelected}
          sx={{ minWidth: 30, padding: "4px", position: "relatie" }}
        >
          <Slide direction="up" in={selected}>
            <CheckCircleIcon sx={{ color: "green", position: "absolute" }} />
          </Slide>
          <Slide direction="up" in={!selected}>
            <AddShoppingCartIcon sx={{ position: "absolute" }} />
          </Slide>
        </Button>
      </Box>
    </Card>
  );
};

export default ProductCard;
