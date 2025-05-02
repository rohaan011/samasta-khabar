import React, { useState, useEffect } from "react";
import "./styles/userHomePage.css";
import Footer from "../components/footer";


function UserHomePage() {
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
          <span>🐦</span>
          <span>📸</span>
          <span>📘</span>
          <span>▶️</span>
        </div>
        <div className="nav-center">
          <h1 className="nav-logo">SAMASTA KHABAR</h1>
        </div>
        <div className="nav-right">
          <p className="nav-date">{formatDate(currentDate)}</p>
          <button className="search-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
          <button className="signin-button">Sign In</button>
        </div>
      </nav>

      <div className="category-nav">
        <a href="#">Home</a>
        <a href="#">Politics</a>
        <a href="#">Business</a>
        <a href="#">Sports</a>
        <a href="#">Health</a>
        <a href="#">Technology</a>
        <a href="#">World News</a>
        <a href="#">Lifestyle</a>
      </div>

      <section className="hero">
        <div className="hero-main">
          <img src="https://picsum.photos/600/300?random=1" alt="Hero" />
          <p className="tag">Politics</p>
          <p className="date">{formatDate(currentDate)}</p>
          <h2>National ID card not mandatory for citizens above 90</h2>
        </div>
        <div className="hero-side">
          <div className="side-card">
            <img src="https://picsum.photos/200/100?random=2" alt="Holi" />
            <p className="tag">Lifestyle</p>
            <p className="date">{formatDate(currentDate)}</p>
            <p>Holi 2081: A splash of color and celebration</p>
          </div>
          <div className="side-card">
            <img src="https://picsum.photos/200/100?random=3" alt="Waste" />
            <p className="tag">Environment</p>
            <p className="date">{formatDate(currentDate)}</p>
            <p>KMC yet to find alternative places to dump waste</p>
          </div>
        </div>
      </section>

      <section className="photo-of-day">
        <h3>PHOTO OF THE DAY</h3>
        <img
          src="https://picsum.photos/700/400?random=4"
          alt="Photo of the Day"
        />
      </section>

      <section className="news">
        <h3>LATEST NEWS</h3>
        <div className="grid">
          {["Health", "Politics", "Business"].map((tag, i) => (
            <div className="card" key={i}>
              <p className="tag">{tag}</p>
              <img
                src={`https://picsum.photos/300/200?random=${i + 5}`}
                alt="news"
              />
              <p>Sample headline about {tag.toLowerCase()} news goes here.</p>
            </div>
          ))}
        </div>
      </section>

      <section className="weather-fun">
        <div className="weather">
          <h4>Weather Today</h4>
          <p>Kathmandu, Nepal</p>
          <h2>15°</h2>
          <p>Feels like 17°</p>
        </div>
        <div className="fun">
          <h4>Fun Time</h4>
          <p>Would you rather...</p>
          <ul>
            <li>Give up your phone for a week</li>
            <li>Or the internet for a day?</li>
          </ul>
          <p className="date">{formatDate(currentDate)}</p>
        </div>
      </section>

      <footer className="user-footer">
  <div className="footer-columns">
    <div>
      <h4>SAMASTA KHABAR</h4>
      <p>Download our App</p>
      <div className="stores">
        <img src="https://picsum.photos/80/40?random=20" alt="Play Store" />
        <img src="https://picsum.photos/80/40?random=21" alt="App Store" />
      </div>
    </div>
    <div>
      <h4>Quick Links</h4>
      <p>Home</p>
      <p>Politics</p>
      <p>Sports</p>
    </div>
    <div>
      <h4>Company</h4>
      <p>About Us</p>
      <p>Contact Us</p>
      <p>Advertise</p>
    </div>
    <div>
      <h4>Follow Us</h4>
      <div className="socials">
        <span>🐦</span>
        <span>📸</span>
        <span>📘</span>
      </div>
    </div>
  </div>
</footer>
      <Footer />
    </div>
  );
}

export default UserHomePage;
