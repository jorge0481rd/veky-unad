import { Box, Button, Tooltip, Typography } from "@mui/material";
import React from "react";
import { updateQty } from "../../../redux/actions/cartActions";
import { useSelector, useDispatch } from "react-redux";

const QtyControl = ({ prodId, label = "" }) => {
  const dispatch = useDispatch();
  const qty = useSelector((state) => {
    const product = state.cart.items.find((el) => el.id === prodId);
    return product?.qty ? product.qty : 1;
  });
  const MORE_THAN_ONE = qty > 1;

  const setNewQty = (newQty) => {
    dispatch(updateQty({ id: prodId, newQty }));
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
        onClick={() => setNewQty(MORE_THAN_ONE ? qty - 1 : 1)}
        disabled={qty <= 1}
        sx={{
          minWidth: 30,
          padding: "4px",
          transition: "all 200ms",
          transform: MORE_THAN_ONE ? "" : "translateX(-10px)",
          opacity: MORE_THAN_ONE ? 1 : 0,
        }}
      >
        <b>-</b>
      </Button>
      <Tooltip title={"cantidad"} arrow placement="top">
        <Typography
          sx={{
            mx: 1,
            transition: "transform 200ms",
          }}
        >
          {qty}
        </Typography>
      </Tooltip>
      <Button
        onClick={() => setNewQty(qty + 1)}
        sx={{ minWidth: 30, padding: "4px" }}
      >
        <b>+</b>
      </Button>
    </Box>
  );
};

export default QtyControl;
