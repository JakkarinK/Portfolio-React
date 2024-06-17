import {
  AppBar,
  Box,
  Container,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

const drawerWidth = 240;
const listNav = [
  ["../Portfolio-React/profile", "Profile"],
  ["../Portfolio-React/skills", "Skills"],
  ["../Portfolio-React/experiences", "Experiences"],
  ["../Portfolio-React/educations", "Educations"],
  ["../Portfolio-React/socials", "Socials"],
];

const Appbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  let activeClassName = "nav-active";

  return (
    <>
      <AppBar component="nav" color="primary">
        <Container>
          <Toolbar>
            <Typography variant="h1" component="h1" sx={{ flexGrow: 1 }}>
              PORTFOLIO
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <nav className="appbar">
                {listNav.map((menu) => (
                  <NavLink
                    to={menu[0]}
                    className={({ isActive }) =>
                      isActive ? activeClassName : undefined
                    }
                  >
                    {menu[1]}
                  </NavLink>
                ))}
              </nav>
            </Box>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { sm: "none" }, p: 0 }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
            <Typography variant="h2" sx={{ my: 2 }}>
              MUI
            </Typography>
            <Divider />
            <List>
              {listNav.map((menu) => (
                <Link to={menu[0]}>
                  <ListItem
                    sx={{
                      transition: ".2s ease",
                      ":hover": { backgroundColor: "#caf0f8" },
                    }}
                  >
                    <Typography variant="h5">{menu[1]}</Typography>
                  </ListItem>
                </Link>
              ))}
            </List>
          </Box>
        </Drawer>
      </nav>
    </>
  );
};

export default Appbar;
