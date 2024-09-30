import React from "react";
import useMyContext from "../../../context/useMyContext";
import MyContainer from "../../compositions/my-container";
import Card from "../../compositions/card";
import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { useProducts } from "../../../hooks/useProducts";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart"; // Import the icon

const Products = () => {
  const { setTitle } = useMyContext();
  setTitle("Productos");
  const items = useSelector((state) => state.cart.items);
  const { products, loading, error } = useProducts();

  if (loading)
    return (
      <MyContainer id="products">
        <Typography
          variant="h3"
          sx={{ width: "100%", textAlign: "center", color: "gray" }}
        >
          Cargando...
        </Typography>
      </MyContainer>
    );
  if (error) return <div>Error: {error}</div>;

  return (
    <MyContainer id="products">
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {products.map((item) => {
          const existsInCart = items.find((el) => el.id === item.id);
          return <Card key={item.id} info={item} isSelected={existsInCart} />;
        })}
      </Box>
    </MyContainer>
  );
};

export default Products;
