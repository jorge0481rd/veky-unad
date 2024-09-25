import { Box } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Menu from "@mui/icons-material/Menu";
import classes from "./menu-button.module.css";

const MenuButton = ({ positionValue }) => {
  return (
    <Box className={classes.menubutton}>
      <Box
        className={classes.content}
        sx={{
          transform: `translateY(${positionValue}px)`,
        }}
      >
        <ArrowBackIcon fontSize="large" />
        <Menu fontSize="large" />
      </Box>
    </Box>
  );
};

export default MenuButton;
