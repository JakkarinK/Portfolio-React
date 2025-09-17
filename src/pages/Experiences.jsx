import {
  Avatar,
  Box,
  Chip,
  Container,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@mui/material";

//Experiences image
import MB_React from "../assets/img/exp/mainboard-react.png";
import Coffee from "../assets/img/exp/coffee-style.png";
import Chillaid from "../assets/img/exp/chillaid.png";
import Furni from "../assets/img/exp/furni.png";
import { Link } from "react-router-dom";

//Icon
import HTML from "../assets/img/icon/HTML.svg";
import JavaScript from "../assets/img/icon/JavaScript.svg";
import CSS from "../assets/img/icon/CSS.svg";
import MUI from "../assets/img/icon/MUI.svg";
import ReactJS from "../assets/img/icon/ReactJS.svg";
import SCSS from "../assets/img/icon/SCSS.svg";
import BootStrap5 from "../assets/img/icon/BootStrap5.svg";
import PHP from "../assets/img/icon/PHP.svg";
import TypeScript from "../assets/img/icon/typescript.svg";
import PrimeFlex from "../assets/img/icon/primeflex.png";
import Taiwind from "../assets/img/icon/tailwind.svg";
import PrimeReact from "../assets/img/icon/primereact.svg";
import FluentUI from "../assets/img/icon/fluentui.svg";

const Experiences = () => {
  const workList = [
    {
      title: "Lexnetix (CTI)",
      date: "10 Jul 2024 - Present",
      subtitle: "Front End Developer",
      img: Chillaid,
      option: [
        ["HTML", HTML],
        ["CSS", CSS],
        ["JavaScript", JavaScript],
        ["TypeScript", TypeScript],
        ["SCSS", SCSS],
        ["PrimeFlex", PrimeFlex],
        ["Taiwind", Taiwind],
        ["PrimeReact", PrimeReact],
        ["FluentUI", FluentUI],
      ],
    },
    {
      title: "Bangkok Web Solution Co.,Ltd.",
      date: "8 Jan 2024 - 4 May 2024",
      subtitle: "Front End Developer[Internship]",
      img: Chillaid,
      option: [
        ["HTML", HTML],
        ["CSS", CSS],
        ["JavaScript", JavaScript],
        ["SCSS", SCSS],
        ["PHP", PHP],
        ["BootStrap5", BootStrap5],
      ],
    },
  ];
  const projectList = [
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
        ["SCSS", SCSS],
        ["MUI", MUI],
        ["ReactJS", ReactJS],
      ],
    },
    {
      website: "https://jakkarink.github.io/react-furni-ecom/",
      title: "Furni Ecommerce(ReactJS)[Coding...]",
      subtitle:
        "Web Appication template from Themewagon, Create for learning and practice BootStrap5 framework",
      img: Furni,
      option: [
        ["HTML", HTML],
        ["CSS", CSS],
        ["JavaScript", JavaScript],
        ["SCSS", SCSS],
        ["BootStrap5", BootStrap5],
        ["ReactJS", ReactJS],
      ],
    },
  ];
  const color = "#1B263B";
  const bgShadow = "#778DA9";
  return (
    <>
      <Container>
        <Box display={"flex"} flexDirection={"column"} gap={7}>
          <Box>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Divider>
                  <Chip label="WORK EXPERIENCES" size="medium" />
                </Divider>
              </Grid>
              <Grid item xs={12} display={"flex"} flexDirection={"column"} gap={2}>
                {workList.reverse().map((data) => (
                  <Paper elevation={2} sx={{ p: 2 }}>
                    <Box>
                      <Box px={1} my={1}>
                        <Typography variant="h5" component={"h5"}>
                          {data.title}
                        </Typography>
                        <Typography variant="subtitle1" component={"span"}>
                          {data.date}
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
                ))}
              </Grid>
            </Grid>
          </Box>

          <Box>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Divider>
                  <Chip label="PROJECTS" size="medium" />
                </Divider>
              </Grid>
              {projectList.reverse().map((data) => (
                <Grid item xs={12} md={6}>
                  <Link to={data.website} target="_blank">
                    <Paper
                      className="exp-hover-custom"
                      elevation={2}
                      sx={{ p: 2, height: "100%" }}
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
        </Box>
      </Container>
    </>
  );
};

export default Experiences;
