import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "react-router-dom";
import Contact from "../components/Contact";
const Socials = () => {
  const socialslink = {
    facebook: "https://www.facebook.com/Earth.jakkarink",
    gmail: "earth1277@gmail.com",
    linkedin: "https://www.linkedin.com/in/jakkarink/",
    github: "https://github.com/JakkarinK",
  };
  return (
    <>
      <Container>
        <Grid
          container
          spacing={2}
          sx={{ pt: { xs: "1rem ", md: "3rem" } }}
          mb={8}
        >
          <Grid item xs={12} md={6}>
            <Paper elevation={5}>
              <Link to={socialslink.facebook}>
                <Box
                  className="social-hover"
                  py={2}
                  px={5}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  gap={1}
                >
                  <FacebookIcon fontSize="large" sx={{ color: "#1877F2" }} />
                  <Typography variant="button" component={"span"}>
                    Facebook
                  </Typography>
                </Box>
              </Link>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={5}>
              <Link to={socialslink.linkedin}>
                <Box
                  className="social-hover"
                  py={2}
                  px={5}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  gap={1}
                >
                  <LinkedInIcon fontSize="large" sx={{ color: "#0762C8" }} />
                  <Typography variant="button" component={"span"}>
                    LinkedIn
                  </Typography>
                </Box>
              </Link>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={5}>
              <Link to={`mailto: ${socialslink.gmail}`}>
                <Box
                  className="social-hover"
                  py={2}
                  px={5}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  gap={1}
                >
                  <GoogleIcon fontSize="large" sx={{ color: "#DB4437" }} />
                  <Typography variant="button" component={"span"}>
                    Google
                  </Typography>
                </Box>
              </Link>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={5}>
              <Link to={socialslink.github}>
                <Box
                  className="social-hover"
                  py={2}
                  px={5}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  gap={1}
                >
                  <GitHubIcon fontSize="large" sx={{ color: "#2b3137" }} />
                  <Typography variant="button" component={"span"}>
                    GitHub
                  </Typography>
                </Box>
              </Link>
            </Paper>
          </Grid>
        </Grid>
        <Contact />
      </Container>
    </>
  );
};

export default Socials;
