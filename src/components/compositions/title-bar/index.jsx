import React from "react";
import { Typography } from "@mui/material";
import useMyContext from "../../../context/useMyContext";
import { useTheme } from "@mui/material";

const TitleBar = () => {
  const { title } = useMyContext();
  const theme = useTheme();

  return (
    <Typography
      sx={{
        background: theme.palette.secondary.main,
        padding: "1rem",
        textAlign: "center",
      }}
      variant="h3"
    >
      {title}
    </Typography>
  );
};

export default TitleBar;
