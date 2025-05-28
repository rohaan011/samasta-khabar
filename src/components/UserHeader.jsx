import React, { useState, useEffect } from "react";
import "../components/styles/UserHeader.css";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";

function UserHeader() {
  const { t } = useTranslation();
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  const formatDate = (date) => {
    return date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <div className="container">
      <nav className="main-nav">
        <div className="nav-left">
          <span>
            <FaTwitter size={20} />
          </span>
          <span>
            <FaInstagram size={20} />
          </span>
          <span>
            <FaFacebook size={20} />
          </span>
          <span>
            <FaYoutube size={20} />
          </span>
        </div>

        <div className="nav-center">
          <h1 className="nav-logo">{t("header.siteTitle")}</h1>
        </div>
        <div className="nav-right">
          <p className="nav-date">{formatDate(currentDate)}</p>
          <button className="search-button">
            <IoSearch />
          </button>
          <button
            onClick={() => i18n.changeLanguage("en")}
            className="lang-button"
          >
            EN
          </button>
          <button
            onClick={() => i18n.changeLanguage("np")}
            className="lang-button"
          >
            NP
          </button>
        </div>
      </nav>

      <div className="category-nav">
        <a href="#home">{t("header.home")}</a>
        <a href="#politics">{t("header.politics")}</a>
        <a href="#business">{t("header.business")}</a>
        <a href="#sports">{t("header.sports")}</a>
        <a href="#health">{t("header.health")}</a>
        <a href="#technology">{t("header.technology")}</a>
        <a href="#world">{t("header.world")}</a>
        <a href="#lifestyle">{t("header.lifestyle")}</a>
      </div>
    </div>
  );
}

export default UserHeader;
