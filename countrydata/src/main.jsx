import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import CountryData from "./context/CountryData.jsx";
import ThemeContext from "./context/ThemeContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeContext>
        <CountryData>
          <App />
        </CountryData>
      </ThemeContext>
    </BrowserRouter>
  </StrictMode>,
);
