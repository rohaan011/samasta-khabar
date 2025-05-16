import { useState } from "react";
import "./styles/ReporterHomePage.css";
import person from "../assets/person.png";
import { LuImagePlus } from "react-icons/lu";
import { PiArticleNyTimesLight } from "react-icons/pi";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import BottomFooter from "../components/BottomFooter";
import TopHeader from "../components/TopHeader";
import ReporterPostPage from "./ReporterPostPage";
const ALL_POSTS = [
  {
    image:
      "https://assets-cdn.kathmandupost.com/uploads/source/news/2023/news/polutionphoto-1699320782.jpg",
    alt: "Air pollution in Kathmandu",
    category: "Health",
    categoryClass: "health",
    date: "10 March 2025",
    title: "AIR POLLUTION LEVELS RISE AGAIN IN KATHMANDU VALLEY",
    status: "new",
  },
  {
    image: "https://farsightnepal.com/media/photos/F6tLmLdbUAASrhe.jpg",
    alt: "Prime Minister visit to China",
    category: "Politics",
    categoryClass: "politics",
    date: "10 March 2025",
    title:
      "PRIME MINISTER EMBARKS ON OFFICIAL VISIT TO CHINA, SIGNS FIVE NEW AGREEMENTS",
    status: "approved",
  },
  {
    image:
      "https://www.orfonline.org/public/uploads/posts/image/1734773995_img-Nepal-hydro.jpg",
    alt: "Hydropower sector",
    category: "Business",
    categoryClass: "business",
    date: "10 March 2025",
    title:
      "FOREIGN INVESTORS SHOW RENEWED INTEREST IN NEPAL'S HYDROPOWER SECTOR",
    status: "rejected",
  },
  {
    image:
      "https://www.orfonline.org/public/uploads/posts/image/1734773995_img-Nepal-hydro.jpg",
    alt: "Hydropower sector",
    category: "Business",
    categoryClass: "business",
    date: "10 March 2025",
    title:
      "FOREIGN INVESTORS SHOW RENEWED INTEREST IN NEPAL'S HYDROPOWER SECTOR",
    status: "rejected",
  },
];

const postCounts = {
  new: ALL_POSTS.filter((p) => p.status === "new").length,
  approved: ALL_POSTS.filter((p) => p.status === "approved").length,
  rejected: ALL_POSTS.filter((p) => p.status === "rejected").length,
};

const ReporterHomePage = () => {
  // 🔴 State for overlay visibility
  const [showOverlay, setShowOverlay] = useState(false);

  const currentDate = new Date();

  const formatDate = (date) => {
    return date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const openOverlay = () => {
    setShowOverlay(true);
  };

  const closeOverlay = () => {
    setShowOverlay(false);
  };
  const [activeTab, setActiveTab] = useState("new");

  const filteredPosts = ALL_POSTS.filter((post) => post.status === activeTab);
  return (
    <div className="container">
      <div className="samasta-khabar">
        <TopHeader />

        {/* User Profile Banner */}
        <div className="profile-banner">
          <div className="geometric-pattern" />
        </div>

        <div className="profile-container">
          <div className="profile-image-container">
            <img src={person} alt="Profile" className="profile-image" />
            <h2 className="profile-name">Rohan Prajapati</h2>
          </div>
          <button className="edit-profile-btn">Edit Profile</button>
        </div>

        {/* Create Post Section */}
        <div className="create-post-container">
          <div className="create-post-box">
            <div className="post-input" onClick={openOverlay}>
              Create a post...
            </div>
            <div className="post-actions">
              <button className="media-btn" onClick={openOverlay}>
                <span className="media-icon">
                  <LuImagePlus size={18} />
                </span>
                Media
              </button>
              <button className="write-article-btn" onClick={openOverlay}>
                <span className="article-icon">
                  <PiArticleNyTimesLight size={22} />
                </span>
                Write article
              </button>
            </div>
          </div>
        </div>

        {/* My Posts Section */}
        <section className="my-posts-section">
          <h2 className="section-title">MY POSTS</h2>

          {/* Tabs */}
          <div className="tabs">
            <button
              className={`tab-btn ${activeTab === "my" ? "active" : ""}`}
              onClick={() => setActiveTab("new")}
            >
              New News
            </button>
            <button
              className={`tab-btn ${activeTab === "approved" ? "active" : ""}`}
              onClick={() => setActiveTab("approved")}
            >
              Approved News
            </button>
            <button
              className={`tab-btn ${activeTab === "rejected" ? "active" : ""}`}
              onClick={() => setActiveTab("rejected")}
            >
              Rejected News
            </button>
          </div>

          {/* Posts Display */}
          <div className="posts-grid">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => (
                <div key={post.id} className="post-card">
                  <div className="post-image">
                    <img src={post.image} alt={post.alt} />
                    <span className={`category-badge ${post.categoryClass}`}>
                      {post.category}
                    </span>
                  </div>
                  <div className="post-date">
                    <span className="calendar-icon">📅</span> {post.date}
                  </div>
                  <h3 className="post-title">{post.title}</h3>
                </div>
              ))
            ) : (
              <p className="no-posts">No posts available.</p>
            )}
          </div>
        </section>

        <BottomFooter />
      </div>

      {/* Overlay */}
      {showOverlay && (
        <div className="overlay">
          <div className="overlay-content">
            <button className="close-btn" onClick={closeOverlay}>
              ×
            </button>
            <ReporterPostPage />
          </div>
        </div>
      )}
    </div>
  );
};

export default ReporterHomePage;
