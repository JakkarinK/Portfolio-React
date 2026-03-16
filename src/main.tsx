import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./assets/styles/global.css";

// primereact
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-blue/theme.css";

createRoot(document.getElementById("root")!).render(
  <PrimeReactProvider value={{ unstyled: false }}>
    <App />
  </PrimeReactProvider>,
);
