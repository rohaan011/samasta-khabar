import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./index.css";
import "./i18n";
import UserHomePage from "./pages/UserHomePage.jsx";
import ReporterHomePage from "./pages/reporterHomePage.jsx";
import ReporterPostPage from "./pages/ReporterPostPage.jsx";
import AdminApprovalPage from "./pages/AdminApprovalPage.jsx";
import AdminHomepage from "./pages/AdminHomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SignupPage from "./pages/signupPage.jsx";
import Weather from "./components/Weather.jsx";
import NewsArticle from "./pages/NewsArticle.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/user" element={<UserHomePage />} />
        <Route path="/reporter" element={<ReporterHomePage />} />
        <Route path="/newsarticle/:id" element={<NewsArticle />} />
        <Route path="/reporternews" element={<ReporterPostPage />} />
        <Route path="/approval" element={<AdminApprovalPage />} />
        <Route path="/admin" element={<AdminHomepage />} />
        <Route path="/weather" element={<Weather />} />
      </Routes>
    </Router>
  </StrictMode>
);
