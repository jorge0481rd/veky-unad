import { Container } from "@mui/material";
import React from "react";

const MyContainer = ({ children, sx }) => {
  return (
    <Container
      sx={{
        padding: 2,
        ...sx,
      }}
    >
      {children}
    </Container>
  );
};

export default MyContainer;
