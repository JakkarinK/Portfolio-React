import React from "react";
import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import SKR from "../assets/img/campus/skr.png";
import TU from "../assets/img/campus/tu.png";

const Educations = () => {
  const eduList = [
    {
      cover: SKR,
      title: "Suankularb Witayalai Rangsit",
      date: "2014 - 2020",
      class: "Science and Mathematics",
      locate: "Pathumthani, 12120",
    },
    {
      cover: TU,
      title: "Thammarsart Rangsit University",
      date: "2020 - 2024",
      class: "Software Engineer",
      locate: "Pathumthani, 12120",
    },
  ];

  return (
    <>
      <Container>
        <Box
          display={"flex"}
          maxHeight={"100vh"}
          height={"100%"}
          justifyContent={"center"}
          alignItems={"center"}
          sx={{pt:{xs:"1rem ",md:"3rem"}}}
        >
          <Grid container spacing={2}>
            {eduList.reverse().map((edu) => (
              <Grid item xs={12} md={6}>
                <Paper elevation={5}>
                  <Grid container>
                    <Grid item xs={12} md={4} alignSelf={"center"} padding={2}>
                      <Box maxWidth={100} sx={{ margin: "0 auto" }}>
                        <img
                          width={"100px"}
                          height={"100px"}
                          src={edu.cover}
                          alt="logo"
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={8}>
                      <Box p={2} sx={{textAlign:{xs:"center", md:"left"}}}>
                        <div className="title">
                          <Typography variant="h5">{edu.title}</Typography>
                        </div>
                        <div className="subtitle">
                          <Typography variant="caption">{edu.date}</Typography>
                        </div>
                        <div className="text">
                          <Typography variant="body1">{edu.class}</Typography>
                          <Typography variant="body1">{edu.locate}</Typography>
                        </div>
                      </Box>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Educations;
