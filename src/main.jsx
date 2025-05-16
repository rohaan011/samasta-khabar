import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./index.css";
import UserHomePage from "./pages/userHomePage.jsx";
import ReporterHomePage from "./pages/reporterHomePage.jsx";
import UserNewsArticle from "./pages/UserNewsArtice.jsx";
import ReporterPostPage from "./pages/ReporterPostPage.jsx";
import AdminApprovalPage from "./pages/AdminApprovalPage.jsx";
import AdminHomepage from "./pages/AdminHomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SignupPage from "./pages/signupPage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/user" element={<UserHomePage />} />
        <Route path="/reporter" element={<ReporterHomePage />} />
        <Route path="/usernewsarticle" element={<UserNewsArticle />} />
        <Route path="/reporternews" element={<ReporterPostPage />} />
        <Route path="/approval" element={<AdminApprovalPage />} />
        <Route path="/admin" element={<AdminHomepage />} />
      </Routes>
    </Router>
  </StrictMode>
);
