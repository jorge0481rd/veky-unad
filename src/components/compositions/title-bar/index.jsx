import React from "react";
import { Divider, Typography } from "@mui/material";
import useMyContext from "../../../context/useMyContext";

const TitleBar = () => {
  const { title } = useMyContext();

  return (
    <Divider sx={{ margin: 2 }}>
      <Typography variant="h4">{title}</Typography>
    </Divider>
  );
};

export default TitleBar;
