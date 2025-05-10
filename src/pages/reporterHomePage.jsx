import React from "react";
import "./styles/ReporterHomePage.css";

const ReporterHomePage = () => {
  return (
    <div className="samasta-khabar">
      <nav className="main-nav">
        <div className="nav-left">
          <span>
            <FaTwitter />
          </span>
          <span>
            <FaInstagram />
          </span>
          <span>
            <FaFacebook />
          </span>
          <span>
            <FaYoutube />
          </span>
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

      {/* User Profile Banner */}
      <div className="profile-banner">
        <div className="geometric-pattern"></div>
        <div className="profile-container">
          <div className="profile-image-container">
            <img
              src="/api/placeholder/150/150"
              alt="Rohan Prajapati"
              className="profile-image"
            />
          </div>
          <h2 className="profile-name">Rohan Prajapati</h2>
          <button className="edit-profile-btn">Edit Profile</button>
        </div>
      </div>

      {/* Create Post Section */}
      <div className="create-post-container">
        <div className="create-post-box">
          <div className="post-input">Create a post...</div>
          <div className="post-actions">
            <button className="media-btn">
              <span className="media-icon">📷</span>
              Media
            </button>
            <button className="write-article-btn">
              <span className="article-icon">📝</span>
              Write article
            </button>
          </div>
        </div>
      </div>

      {/* My Posts Section */}
      <section className="my-posts-section">
        <h2 className="section-title">MY POSTS</h2>

        <div className="posts-grid">
          {/* Post 1 */}
          <div className="post-card">
            <div className="post-image">
              <img
                src="/api/placeholder/400/200"
                alt="Air pollution in Kathmandu"
              />
              <span className="category-badge health">Health</span>
            </div>
            <div className="post-date">
              <span className="calendar-icon">📅</span>
              10 March 2025
            </div>
            <h3 className="post-title">
              AIR POLLUTION LEVELS RISE AGAIN IN KATHMANDU VALLEY
            </h3>
          </div>

          {/* Post 2 */}
          <div className="post-card">
            <div className="post-image">
              <img
                src="/api/placeholder/400/200"
                alt="Prime Minister visit to China"
              />
              <span className="category-badge politics">Politics</span>
            </div>
            <div className="post-date">
              <span className="calendar-icon">📅</span>
              10 March 2025
            </div>
            <h3 className="post-title">
              PRIME MINISTER EMBARKS ON OFFICIAL VISIT TO CHINA, SIGNS FIVE NEW
              AGREEMENTS
            </h3>
          </div>

          {/* Post 3 */}
          <div className="post-card">
            <div className="post-image">
              <img src="/api/placeholder/400/200" alt="Hydropower sector" />
              <span className="category-badge business">Business</span>
            </div>
            <div className="post-date">
              <span className="calendar-icon">📅</span>
              10 March 2025
            </div>
            <h3 className="post-title">
              FOREIGN INVESTORS SHOW RENEWED INTEREST IN NEPAL'S HYDROPOWER
              SECTOR
            </h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReporterHomePage;
