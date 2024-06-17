import { Box, Container, List, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import DownloadIcon from "@mui/icons-material/Download";
import GitHubIcon from "@mui/icons-material/GitHub";
import Resume from "../assets/resume/Resume_JakkarinK.pdf";

const Footer = () => {
  const bgcolor = "#1B263B";
  const color = "#b5e2fa";
  const resume = Resume;
  const socials = [
    ["https://www.facebook.com/Earth.jakkarink", <FacebookIcon />, "#1877F2"],
    ["https://www.linkedin.com/in/jakkarink/", <LinkedInIcon />, "#0762C8"],
    ["https://github.com/JakkarinK", <GitHubIcon />, "#2dba4e"],
    ["mailto:earth1277@gmail.com", <EmailIcon />, "#DB4437"],
  ];
  return (
    <Box bgcolor={bgcolor} color={color} py={2} width={"100%"}>
      <Container
        sx={{
          display: "flex",
          gap: { xs: "1rem" },
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          display={"flex"}
          gap={2}
          sx={{ flexDirection: { xs: "column", sm: "row" } }}
        >
          <Link
            to={resume}
            target="_blank"
            style={{
              color: color,
              border: "1px solid",
              padding: "2px 5px",
              borderRadius: "5px",
            }}
          >
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              p={0}
            >
              <DownloadIcon />
              <Typography variant="caption" color={color}>
                Resume
              </Typography>
            </Box>
          </Link>
          <Box
            display={"flex"}
            color={color}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <LocalPhoneIcon />
            <Typography variant="subtitle1" color={color}>
              (+66)86-0000943
            </Typography>
          </Box>
        </Box>
        <Box display={"flex"} gap={1}>
          {socials.map((social) => (
            <Link
            target="_blank"
              to={social[0]}
              style={{ display: "flex", padding: "2px", color: color }}
            >
              <Box sx={{transition:".1s ease", ":hover": { color: social[2] } }}>{social[1]}</Box>
            </Link>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
