import React from "react";
import { Typography, Box, Grid, Paper, Avatar } from "@mui/material";
import useMyContext from "../../../context/useMyContext";
import MyContainer from "../../compositions/my-container";

const About = () => {
  const { setTitle } = useMyContext();
  setTitle("Acerca de nosotros");

  return (
    <MyContainer id="about-us">
      <Typography variant="h5" align="center" paragraph>
        <strong>Es tiempo de un cabello hermoso!</strong>
      </Typography>
      <Typography variant="h6" align="center" paragraph>
        En VekyRD, nos apasiona la belleza y el bienestar. Creemos que cada
        persona merece sentirse hermosa y segura.
      </Typography>
      <Typography variant="body1" align="center" paragraph>
        Nuestros productos son <strong>libres de parabenos</strong> y están
        formulados con ingredientes <strong>naturales</strong> para cuidar tu
        cabello y el medio ambiente.
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: 3 }}>
            <Typography variant="h6" gutterBottom>
              Nuestra Misión
            </Typography>
            <Typography paragraph>
              Proporcionar productos de belleza de alta calidad que no solo
              realzan la belleza exterior, sino que también fomentan la
              confianza interior. Nos dedicamos a la sostenibilidad y a utilizar
              ingredientes éticos en todos nuestros productos.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: 3 }}>
            <Typography variant="h6" gutterBottom>
              Nuestro Equipo
            </Typography>
            <Grid container spacing={2}>
              <Grid
                item
                xs={4}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Avatar sx={{ width: 100, height: 100, mb: 1 }}>A</Avatar>
                <Typography variant="body1" align="center">
                  Nelly
                </Typography>
                <Typography variant="caption" align="center">
                  Fundadora
                </Typography>
              </Grid>
              <Grid
                item
                xs={4}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Avatar sx={{ width: 100, height: 100, mb: 1 }}>B</Avatar>
                <Typography variant="body1" align="center">
                  Alex
                </Typography>
                <Typography variant="caption" align="center">
                  Director de Producto
                </Typography>
              </Grid>
              <Grid
                item
                xs={4}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Avatar sx={{ width: 100, height: 100, mb: 1 }}>C</Avatar>
                <Typography variant="body1" align="center">
                  Alba
                </Typography>
                <Typography variant="caption" align="center">
                  Marketing
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
      <Box sx={{ mt: 5, textAlign: "center" }}>
        <Typography variant="h6">
          Únete a nuestra comunidad y descubre la belleza que te espera con
          productos que cuidan de ti y del planeta.
        </Typography>
      </Box>
    </MyContainer>
  );
};

export default About;
