import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Box, Button, Card, Slide, Tooltip, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../../redux/actions/cartActions";
import productImg from "./product_img.jpg";
import QtyControl from "../qty-control";

const ProductCard = ({ info, isSelected }) => {
  const [selected, setSelected] = useState(isSelected);
  const { id, name, price } = info;
  const containerRef = useRef(null);
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
    <Box
      ref={containerRef}
      sx={{
        width: 250,
        margin: 1,
        padding: 1,
        display: "flex",
        flexDirection: "column",
        gap: 1,
        cursor: "pointer",
        position: "relative",
        transition: "all 200ms ease-in",
        boxShadow: selected ? "-7px 6px 4px #dedede" : "",
        transform: selected ? "translate(5px, -10px)" : "",
        outline: selected ? "solid 1px #dedede" : "",
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

        <Slide
          direction="right"
          in={selected || false}
          timeout={320}
          container={containerRef.current}
        >
          <div>
            <QtyControl prodId={id} />
          </div>
        </Slide>
        <Button
          onClick={toggleSelected}
          sx={{ minWidth: 30, padding: "4px", position: "relatie" }}
        >
          <Slide
            direction="up"
            in={selected || false}
            container={containerRef.current}
          >
            <CheckCircleIcon sx={{ color: "green", position: "absolute" }} />
          </Slide>
          <Slide
            direction="up"
            in={!selected || false}
            container={containerRef.current}
          >
            <AddShoppingCartIcon sx={{ position: "absolute" }} />
          </Slide>
        </Button>
      </Box>
    </Box>
  );
};

export default ProductCard;
