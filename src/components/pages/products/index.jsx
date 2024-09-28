import React from "react";
import useMyContext from "../../../context/useMyContext";
import MyContainer from "../../compositions/my-container";
import Card from "../../compositions/card";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";

const products = [
  {
    id: 1,
    name: "Stylish Backpack with great battery and led",
    price: 49.99,
  },
  {
    id: 2,
    name: "Wireless Headphones black with additional pads and multiple connectors. Supports USB, Bluetooth and Wifi",
    price: 89.99,
  },
  {
    id: 3,
    name: "Smartwatch",
    price: 199.99,
  },
  {
    id: 4,
    name: "Portable Charger",
    price: 29.99,
  },
  {
    id: 5,
    name: "Gaming Mouse",
    price: 39.99,
  },
  {
    id: 6,
    name: "Bluetooth Speaker",
    price: 59.99,
  },
  {
    id: 7,
    name: "4K Monitor",
    price: 299.99,
  },
  {
    id: 8,
    name: "Laptop Stand",
    price: 25.99,
  },
  {
    id: 9,
    name: "Ergonomic Keyboard",
    price: 69.99,
  },
  {
    id: 10,
    name: "Smartphone Holder",
    price: 15.99,
  },
];

const Products = () => {
  const { setTitle } = useMyContext();
  setTitle("Productos");
  const items = useSelector((state) => state.cart.items);
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
