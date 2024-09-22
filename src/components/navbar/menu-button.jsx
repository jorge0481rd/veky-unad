import { Box } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import classes from "./menu-button.module.css";

const MenuButton = ({ translateValue }) => {
  return (
    <Box className={classes.menubutton}>
      <Box
        className={classes.content}
        sx={{
          transform: `translateY(${translateValue}px)`,
          outline: translateValue > 0 ? "solid 1px red" : "",
        }}
      >
        <ArrowBackIcon fontSize="large" />
      </Box>
    </Box>
  );
};

export default MenuButton;
