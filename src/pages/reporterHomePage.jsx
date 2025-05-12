import "./styles/ReporterHomePage.css";
import person from "../assets/person.png";
import { LuImagePlus } from "react-icons/lu";
import { PiArticleNyTimesLight } from "react-icons/pi";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import BottomFooter from "../components/BottomFooter";

const POSTS = [
  {
    id: 1,
    image:
      "https://assets-cdn.kathmandupost.com/uploads/source/news/2023/news/polutionphoto-1699320782.jpg",
    alt: "Air pollution in Kathmandu",
    category: "Health",
    categoryClass: "health",
    date: "10 March 2025",
    title: "AIR POLLUTION LEVELS RISE AGAIN IN KATHMANDU VALLEY",
  },
  {
    id: 2,
    image: "https://farsightnepal.com/media/photos/F6tLmLdbUAASrhe.jpg",
    alt: "Prime Minister visit to China",
    category: "Politics",
    categoryClass: "politics",
    date: "10 March 2025",
    title:
      "PRIME MINISTER EMBARKS ON OFFICIAL VISIT TO CHINA, SIGNS FIVE NEW AGREEMENTS",
  },
  {
    id: 3,
    image:
      "https://www.orfonline.org/public/uploads/posts/image/1734773995_img-Nepal-hydro.jpg",
    alt: "Hydropower sector",
    category: "Business",
    categoryClass: "business",
    date: "10 March 2025",
    title:
      "FOREIGN INVESTORS SHOW RENEWED INTEREST IN NEPAL'S HYDROPOWER SECTOR",
  },
];

const ReporterHomePage = () => {
  const currentDate = new Date();

  const formatDate = (date) => {
    return date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };
  return (
    <div className="container">
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
          <div className="geometric-pattern" />
        </div>

        <div className="profile-container">
          <div className="profile-image-container">
            <img src={person} alt="Google Play" className="profile-image" />
            <h2 className="profile-name">Rohan Prajapati</h2>
          </div>
          <button className="edit-profile-btn">Edit Profile</button>
        </div>

        {/* Create Post Section */}
        <div className="create-post-container">
          <div className="create-post-box">
            <div className="post-input">Create a post...</div>
            <div className="post-actions">
              <button className="media-btn">
                <span className="media-icon">
                  <LuImagePlus size={18} />
                </span>
                Media
              </button>
              <button className="write-article-btn">
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

          <div className="posts-grid">
            {POSTS.map((post) => (
              <div key={post.id} className="post-card">
                <div className="post-image">
                  <img src={post.image} alt={post.alt} />
                  <span className={`category-badge ${post.categoryClass}`}>
                    {post.category}
                  </span>
                </div>
                <div className="post-date">
                  <span className="calendar-icon">📅</span>
                  {post.date}
                </div>
                <h3 className="post-title">{post.title}</h3>
              </div>
            ))}
          </div>
        </section>
        <BottomFooter />
      </div>
    </div>
  );
};

export default ReporterHomePage;
