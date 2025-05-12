import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./index.css";
import SignupPage from "./pages/SignupPage.jsx";
import UserHomePage from "./pages/userHomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import ReporterHomePage from "./pages/reporterHomePage.jsx";
import UserNewsArticle from "./pages/UserNewsArtice.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/user" element={<UserHomePage />} />
        <Route path="/reporter" element={<ReporterHomePage />} />
        <Route path="/usernewsarticle" element={<UserNewsArticle />} />
      </Routes>
    </Router>
  </StrictMode>
);
