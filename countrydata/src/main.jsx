import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { CountryContextProvider } from "./context/CountryDetails.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <CountryContextProvider>
        <App />
      </CountryContextProvider>
    </BrowserRouter>
  </StrictMode>,
);
