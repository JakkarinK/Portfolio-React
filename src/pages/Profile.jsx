import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import Carousel from "../components/carousel/CarouselProfile";
import { Link } from "react-router-dom";
import DownloadIcon from "@mui/icons-material/Download";
import Resume from "../assets/resume/Resume_JakkarinK.pdf";
import Contact from "../components/Contact";
const Profile = () => {
  const color = "#415A77";

  return (
    <Box>
      <Container>
        <Box my={5}>
          <Carousel />
        </Box>
        <Box textAlign={"center"} mb={5} maxWidth={550} mx={"auto"}>
          <Typography variant="h5" color={color}>
            Hello, my name is "Jakkarin Kerdthaidee"
          </Typography>
          <Typography variant="h5" color={color}>
            Can call me "Earth"
          </Typography>
          <Typography variant="h5" color={color}>
            I am a software engineering student.
          </Typography>
          <Typography variant="h5" color={color}>
            In the future, I hope to work as a Front-end Developer.
          </Typography>
          <Typography variant="h5" color={color}>
            And finally, thank you for visited my website.
          </Typography>
        </Box>
        <Box textAlign={"center"} mb={5}>
          <Link
            to={Resume}
            target="_blank"
            style={{
              fontSize: "30px",
              color: "#004e98",
              border: "2px solid",
              borderRadius: "10px",
              padding: "10px 30px",
            }}
          >
            Resume
          </Link>
        </Box>
        <Contact />
      </Container>
    </Box>
  );
};

export default Profile;
