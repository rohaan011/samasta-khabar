import { useState } from "react";
import "./styles/AdminHomePage.css";
import BottomFooter from "../components/BottomFooter";
import TopHeader from "../components/TopHeader";
import { ImNewspaper } from "react-icons/im";
import PostsCard from "../components/PostsCard";

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

const AdminHomePage = () => {
  const [activeTab, setActiveTab] = useState("new");

  const filteredPosts = ALL_POSTS.filter((post) => post.status === activeTab);

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
          <PostsCard posts={filteredPosts} />
        </section>

        <BottomFooter />
      </div>
    </div>
  );
};

export default AdminHomePage;
