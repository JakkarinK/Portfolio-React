import { createBrowserRouter, Navigate, RouterProvider } from "react-router";

// layouts
import LayoutDefault from "./layouts/default";

// pages
import Homepage from "./pages/homepage/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutDefault />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "home",
        element: <Homepage />,
      },
      {
        path: "*",
        element: <Navigate to="/" replace />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
