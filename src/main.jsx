import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
// import CursorProvider from "./hooks/CustomCursor/CursorProvider.jsx";
// import BlurryCursor from "./hooks/CustomCursor/BlurryCursor.jsx";

createRoot(document.getElementById("root")).render(
  // <CursorProvider>
  <StrictMode>
    <App />
    {/* <BlurryCursor /> */}
  </StrictMode>
  // </CursorProvider>
);
