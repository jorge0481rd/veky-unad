import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { updateQty } from "../../../redux/actions/cartActions";
import { useSelector, useDispatch } from "react-redux";

const QtyControl = ({ prodId, label = "" }) => {
  const dispatch = useDispatch();
  const qty = useSelector((state) => {
    const product = state.cart.items.find((el) => el.id === prodId);

    return product?.qty ? product.qty : 1;
  });

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
        onClick={() => setNewQty(qty > 1 ? qty - 1 : 1)}
        disabled={qty <= 1}
        sx={{ minWidth: 30, padding: "4px", opacity: qty > 1 ? 1 : 0 }}
      >
        <b>-</b>
      </Button>
      <Typography sx={{ mx: 1 }}>{qty}</Typography>{" "}
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
