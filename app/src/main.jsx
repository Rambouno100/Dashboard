// main.jsx
// Este es el punto de entrada de tu app React.
// Aquí conectamos React con el HTML (index.html tiene un div con id="root")
// RouterProvider le dice a React que use nuestro router para manejar las URLs
import './index.css'

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);