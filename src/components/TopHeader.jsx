import React, { useState, useEffect } from "react";
import "../components/styles/TopHeader.css";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";

function TopHeader() {
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
          <h1 className="nav-logo">SAMASTA KHABAR</h1>
        </div>
        <div className="nav-right">
          <p className="nav-date">{formatDate(currentDate)}</p>
          <button className="search-button">
            <IoSearch />
          </button>
          <button className="signin-button">Sign In</button>
        </div>
      </nav>
    </div>
  );
}

export default TopHeader;
