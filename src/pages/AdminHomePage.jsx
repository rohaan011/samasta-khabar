import { useState } from "react";
import "./styles/AdminHomePage.css";
import BottomFooter from "../components/BottomFooter";
import TopHeader from "../components/TopHeader";
import { ImNewspaper } from "react-icons/im";
import PostsCard from "../components/PostsCard";
import { POSTS, mainPost, sidePosts } from "../utils/posts";

const postCounts = {
  new: POSTS.filter((p) => p.status === "new").length,
  approved: POSTS.filter((p) => p.status === "approved").length,
  rejected: POSTS.filter((p) => p.status === "rejected").length,
};

const AdminHomePage = () => {
  const [activeTab, setActiveTab] = useState("new");
  const navigate = useNavigate();

  const filteredPosts = ALL_POSTS.filter((post) => post.status === activeTab);

  const handlePostClick = (postId) => {
    navigate(`/newsarticle/${postId}`);
  };

  return (
    <div className="container">
      <div className="samasta-khabar">
        <TopHeader />
        <div className="dashboard-summary">
          <h2 className="dashboard-title">SAMASTA KHABAR</h2>
          <div className="summary-cards">
            <div className="card">
              <p className="card-label">New news</p>
              <p className="card-value">{postCounts.new}</p>
              <span className="card-icon">
                <ImNewspaper />
              </span>
            </div>
            <div className="card">
              <p className="card-label">Approved news</p>
              <p className="card-value">{postCounts.approved}</p>
              <span className="card-icon">
                <ImNewspaper />
              </span>
            </div>
            <div className="card">
              <p className="card-label">Rejected news</p>
              <p className="card-value">{postCounts.rejected}</p>
              <span className="card-icon">
                <ImNewspaper />
              </span>
            </div>
          </div>
        </div>

        {/* My Posts Section */}
        <section className="my-posts-section">
          <h2 className="section-title">POSTS</h2>

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
          <PostsCard posts={filteredPosts} onPostClick={handlePostClick} />
        </section>

        <BottomFooter />
      </div>
    </div>
  );
};

export default AdminHomePage;
