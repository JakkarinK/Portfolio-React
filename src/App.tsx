import { createBrowserRouter, Navigate, RouterProvider } from "react-router";

import LayoutDefault from "./layouts/default";
import Educations from "./pages/educations";
import Experiences from "./pages/experiences";
import Homepage from "./pages/home-page";
import Skills from "./pages/skills";
import Socials from "./pages/socials";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutDefault />,
    children: [
      { index: true, element: <Homepage /> },
      { path: "profile", element: <Homepage /> },
      { path: "skills", element: <Skills /> },
      { path: "experiences", element: <Experiences /> },
      { path: "educations", element: <Educations /> },
      { path: "socials", element: <Socials /> },
      { path: "*", element: <Navigate to="/" replace /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
