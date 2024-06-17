import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Appbar from "../components/Appbar";
import Footer from "../components/Footer";

const View = ({ children }) => {
  return (
    <Box>
      <Box className="view" bgcolor={"#b5e2fa"} minHeight={"100vh"}>
        <Appbar />
        <Box component="main" sx={{ p: 3 }} minHeight={"100vh"}>
          {children}
        </Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default View;
