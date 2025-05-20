import React, { useState, useEffect } from "react";
import "../components/styles/UserHeader.css";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";

function UserHeader() {
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
        </div>
      </nav>

      <div className="category-nav">
        <a href="#home">Home</a>
        <a href="#politics">Politics</a>
        <a href="#business">Business</a>
        <a href="#sports">Sports</a>
        <a href="#health">Health</a>
        <a href="#technology">Technology</a>
        <a href="#world">World News</a>
        <a href="#lifestyle">Lifestyle</a>
      </div>
    </div>
  );
}

export default UserHeader;
