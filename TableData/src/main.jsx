import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import TableData from "./Context/TableData.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TableData>
      <App />
    </TableData>
  </StrictMode>
);