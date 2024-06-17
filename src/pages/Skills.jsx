import { Avatar, Box, Chip, Container, Typography } from "@mui/material";
import React from "react";

//Icon
import HTML from "../assets/img/icon/HTML.svg";
import JavaScript from "../assets/img/icon/JavaScript.svg";
import CSS from "../assets/img/icon/CSS.svg";
import MUI from "../assets/img/icon/MUI.svg";
import ReactJS from "../assets/img/icon/ReactJS.svg";
import BootStrap5 from "../assets/img/icon/BootStrap5.svg";
import MongoDB from "../assets/img/icon/MongoDB.svg";
import Taiwind from "../assets/img/icon/Taiwind.svg";
import MySQL from "../assets/img/icon/MySQL.svg";
import PHP from "../assets/img/icon/PHP.svg";
import Dart from "../assets/img/icon/Dart.svg";
import SCSS from "../assets/img/icon/SCSS.svg";

const Skills = () => {
  const p_Lang = [
    ["HTML", HTML],
    ["JavaScript", JavaScript],
    ["CSS", CSS],
    ["SCSS", SCSS],
    ["PHP", PHP],
    ["Dart", Dart],
  ];
  const fw_Lang = [
    ["ReactJS", ReactJS],
    ["BootStrap5", BootStrap5],
    ["MUI", MUI],
    ["Taiwind", Taiwind],
  ];
  const db_Lang = [
    ["MongoDB", MongoDB],
    ["MySQL", MySQL],
  ];
  return (
    <>
      {/* icon={<FaceIcon />} */}
      <Box>
        <Container>
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            sx={{pt:{xs:"1rem ",md:"3rem"}}}
          >
            <Box mb={5}>
              <Typography variant="h2" mb={2}>
                Programming Languages
              </Typography>
              <Box display={"flex"} flexWrap={"wrap"} gap={1}>
                {p_Lang.map((program) => (
                  <Chip
                    avatar={
                      <Avatar
                        className={program[0]}
                        alt="Icon"
                        src={program[1]}
                      />
                    }
                    label={program[0]}
                    variant="Filled"
                    color="primary"
                  />
                ))}
              </Box>
            </Box>
            <Box mb={5}>
              <Typography variant="h2" mb={2}>
                Framework Languages
              </Typography>
              <Box display={"flex"} flexWrap={"wrap"} gap={1}>
                {fw_Lang.map((framework) => (
                  <Chip
                    avatar={
                      <Avatar
                        className={framework[0]}
                        alt="Icon"
                        src={framework[1]}
                        sx={{ color: "red" }}
                      />
                    }
                    label={framework[0]}
                    variant="Filled"
                    color="primary"
                  />
                ))}
              </Box>
            </Box>
            <Box mb={5}>
              <Typography variant="h2" mb={2}>
                Database Languages
              </Typography>
              <Box display={"flex"} flexWrap={"wrap"} gap={1}>
                {db_Lang.map((database) => (
                  <Chip
                    avatar={
                      <Avatar
                        className={database[0]}
                        alt="Icon"
                        src={database[1]}
                        sx={{ color: "red" }}
                      />
                    }
                    label={database[0]}
                    variant="Filled"
                    color="primary"
                  />
                ))}
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Skills;
