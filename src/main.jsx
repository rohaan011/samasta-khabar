import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./index.css";
import SignupPage from "./pages/signupPage.jsx";
import UserHomePage from "./pages/userHomePage.jsx";
import LoginPage from "./pages/loginpage.jsx";
import ReporterHomePage from "./pages/reporterHomePage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/user" element={<UserHomePage />} />
        <Route path="/user" element={<ReporterHomePage />} />
      </Routes>
    </Router>
  </StrictMode>
);
