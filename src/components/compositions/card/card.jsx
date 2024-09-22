import { Box, Card, Typography } from "@mui/material";
import React from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import productImg from './product_img.jpg'

const ProductCard = () => {
  return (
    <Card
			sx={{
				width: 250,
				margin: 1,
				padding: 1,
			}}
		>
      <img src={productImg} alt="producto" width={250} height={300} />
      <Typography>Prepoo acondicionador</Typography>
      <Box
        className="card-info"
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography>$5.25</Typography>
        <AddShoppingCartIcon />
      </Box>
    </Card>
  );
};

export default ProductCard;
