import {
  Avatar,
  Box,
  Chip,
  Container,
  Divider,
  Grid,
  Paper,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
import MainboardReact from "../assets/img/exp/mainboard-react.png";

//Experiences image
import MB_React from "../assets/img/exp/mainboard-react.png";
import Coffee from "../assets/img/exp/coffee-style.png";
import Chillaid from "../assets/img/exp/chillaid.png";
import { Link } from "react-router-dom";

//Icon
import HTML from "../assets/img/icon/HTML.svg";
import JavaScript from "../assets/img/icon/JavaScript.svg";
import CSS from "../assets/img/icon/CSS.svg";
import MUI from "../assets/img/icon/MUI.svg";
import ReactJS from "../assets/img/icon/ReactJS.svg";
import SCSS from "../assets/img/icon/SCSS.svg";

const Experiences = () => {
  const expList = [
    {
      website: "https://jakkarink.github.io/ChillAid-React/",
      title: "Chillaid",
      subtitle: "Blog website templete, Create for learning and practice",
      img: Chillaid,
      option: [
        ["HTML", HTML],
        ["CSS", CSS],
        ["JavaScript", JavaScript],
        ["SCSS", SCSS],
        ["ReactJS", ReactJS],
      ],
    },
    {
      website: "https://jakkarink.github.io/Coffee-Style-Website/",
      title: "CoffeeStyle",
      subtitle:
        "Website shopping templete from webflow website, Create for learning and practice",
      img: Coffee,
      option: [
        ["HTML", HTML],
        ["CSS", CSS],
        ["JavaScript", JavaScript],
        ["SCSS", SCSS],
        ["ReactJS", ReactJS],
      ],
    },
    {
      website: "https://jakkarink.github.io/react-material-dashboard/",
      title: "Dashboard Material(ReactJS)",
      subtitle:
        "Web Appication template from Creative Tim, Create for learning and practice MUI framework",
      img: MB_React,
      option: [
        ["HTML", HTML],
        ["CSS", CSS],
        ["JavaScript", JavaScript],
        ["MUI", MUI],
        ["ReactJS", ReactJS],
      ],
    },
  ];
  const color = "#1B263B";
  const bgShadow = "#778DA9";
  return (
    <>
      <Container>
        <Box>
          <Grid container spacing={2}>
            {expList.reverse().map((data) => (
              <Grid item xs={12} md={6}>
                <Link to={data.website} target="_blank">
                  <Paper
                    className="exp-hover-custom"
                    elevation={2}
                    sx={{ p: 2 }}
                  >
                    <img
                      src={data.img}
                      alt=""
                      style={{
                        objectFit: "cover",
                        objectPosition: "top",
                        width: "100%",
                        boxShadow: "0 0 10px " + bgShadow,
                        borderRadius: "5px",
                      }}
                    />
                    <Box>
                      <Box px={1} my={1}>
                        <Typography variant="h5" component={"h5"}>
                          {data.title}
                        </Typography>
                        <Typography variant="body1" component={"p"}>
                          {data.subtitle}
                        </Typography>
                      </Box>
                      <Divider />
                      <Box
                        mt={1}
                        sx={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: 1,
                        }}
                      >
                        {data.option.map((opt) => (
                          <Chip
                            className="chip-custom"
                            avatar={
                              <Avatar
                                className={opt[0]}
                                alt="Icon"
                                src={opt[1]}
                              />
                            }
                            label={opt[0]}
                            variant="Filled"
                          />
                        ))}
                      </Box>
                    </Box>
                  </Paper>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Experiences;
