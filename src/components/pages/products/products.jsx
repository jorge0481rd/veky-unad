import React from "react";
import useMyContext from "../../../context/useMyContext";
import MyContainer from "../../compositions/container/container";
import Card from "../../compositions/card/card";
import { Box } from "@mui/material";

const products = [
  {
    id: 1,
    description: "Stylish Backpack with great battery and led",
    price: 49.99,
  },
  {
    id: 2,
    description:
      "Wireless Headphones black with additional pads and multiple connectors. Supports USB, Bluetooth and Wifi",
    price: 89.99,
  },
  {
    id: 3,
    description: "Smartwatch",
    price: 199.99,
  },
  {
    id: 4,
    description: "Portable Charger",
    price: 29.99,
  },
  {
    id: 5,
    description: "Gaming Mouse",
    price: 39.99,
  },
  {
    id: 6,
    description: "Bluetooth Speaker",
    price: 59.99,
  },
  {
    id: 7,
    description: "4K Monitor",
    price: 299.99,
  },
  {
    id: 8,
    description: "Laptop Stand",
    price: 25.99,
  },
  {
    id: 9,
    description: "Ergonomic Keyboard",
    price: 69.99,
  },
  {
    id: 10,
    description: "Smartphone Holder",
    price: 15.99,
  },
];

const Products = () => {
  const { setTitle } = useMyContext();
  setTitle("Productos");
  return (
    <MyContainer>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {products.map((item) => (
          <Card key={item.id} info={item} />
        ))}
      </Box>
    </MyContainer>
  );
};

export default Products;
