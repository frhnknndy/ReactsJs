import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "remixicon/fonts/remixicon.css";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import { LanguageProvider } from "./components/LanguageContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LanguageProvider>
      <Navbar />
      <App />
      <Footer />
    </LanguageProvider>
  </StrictMode>
);
