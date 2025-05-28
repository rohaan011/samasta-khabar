import { useState, useEffect } from "react";
import "./styles/ReporterHomePage.css";
import person from "../assets/person.png";
import { LuImagePlus } from "react-icons/lu";
import { PiArticleNyTimesLight } from "react-icons/pi";
import BottomFooter from "../components/BottomFooter";
import TopHeader from "../components/TopHeader";
import ReporterPostPage from "./ReporterPostPage";
import PostsCard from "../components/PostsCard";
import { IoClose } from "react-icons/io5";
import { POSTS, mainPost, sidePosts } from "../utils/posts";

const ReporterHomePage = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [activeTab, setActiveTab] = useState("new");
  const [posts, setPosts] = useState([]);

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

  // Fetch posts from backend API
  // useEffect(() => {
  //   fetch("http://localhost:3000/api/")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setPosts(data);
  //     })
  //     .catch((err) => console.error("Error fetching posts:", err));
  // }, []);

  // Fetch posts from local posts.js
  useEffect(() => {
    setPosts(POSTS);
  }, []);

  const filteredPosts = posts.filter((post) => post.status === activeTab);
  return (
    <div className="container">
      <div className="samasta-khabar">
        <TopHeader />
        <div>
          {/* User cover image */}
          <div className="cover-image">
            <img src="https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2017/08/facebook-cover-photo-header.jpg" />
          </div>

          <div className="profile-container">
            <div className="profile-image-container">
              <img src={person} alt="Profile" className="profile-image" />
              <h2 className="profile-name">Rohan Prajapati</h2>
            </div>
            <button className="edit-profile-btn">Edit Profile</button>
          </div>
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
              className={`tab-btn ${activeTab === "new" ? "active" : ""}`}
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
          <PostsCard posts={filteredPosts} />
        </section>
        <BottomFooter />
      </div>

      {/* Overlay */}
      {showOverlay && (
        <div className="overlay">
          <div className="overlay-content">
            <button className="close-btn" onClick={closeOverlay}>
              <IoClose />
            </button>
            <ReporterPostPage />
          </div>
        </div>
      )}
    </div>
  );
};

export default ReporterHomePage;
