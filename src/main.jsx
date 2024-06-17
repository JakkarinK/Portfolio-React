import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@mui/material";
import { theme } from "./Theme";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import View from "./views/View.jsx";
import "./main.scss";
import Profile from "./pages/Profile.jsx";
import Skills from "./pages/Skills.jsx";
import Experiences from "./pages/Experiences.jsx";
import Educations from "./pages/Educations.jsx";
import Socials from "./pages/Socials.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <View><Profile /></View>,
  },
  {
    path: "/skills",
    element: <View><Skills /></View>,
  },
  {
    path: "/experiences",
    element: <View><Experiences /></View>,
  },
  {
    path: "/educations",
    element: <View><Educations /></View>,
  },
  {
    path: "/socials",
    element: <View><Socials /></View>,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
