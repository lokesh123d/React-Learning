import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { UserProvider } from "./Context.jsx";

import { DataProvider } from "./Context2.jsx";

createRoot(document.getElementById("root")).render(
    <DataProvider>
  <UserProvider>
    <App />
  </UserProvider>
  </DataProvider>
);
