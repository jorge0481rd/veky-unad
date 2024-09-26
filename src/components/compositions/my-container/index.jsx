import { Container } from "@mui/material";
import React from "react";

const MyContainer = ({ children }) => {
  return <Container sx={{ padding: 2 }}>{children}</Container>;
};

export default MyContainer;
