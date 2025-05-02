import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./index.css";
import SignupPage from "./pages/signupPage.jsx";
import LoginPage from "./pages/loginPage.jsx";
import UserHomePage from "./pages/userHomePage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/user" element={<UserHomePage />} />
      </Routes>
    </Router>
  </StrictMode>
);
