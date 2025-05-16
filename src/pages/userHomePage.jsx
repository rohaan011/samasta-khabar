import React, { useState, useEffect } from "react";
import "./styles/UserHomePage.css";
import UserFooter from "../components/UserFooter";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import UserHeader from "../components/UserHeader";

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
    {
      id: 4,
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

  return (
    <div className="container">
      <UserHeader />

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
          src="https://images.travelandleisureasia.com/wp-content/uploads/sites/3/2024/01/19201004/kathmandu.jpeg"
          alt="Photo of the Day"
        />
      </section>

      <section className="latest-news-section">
        <h2 className="section-title">Latest News</h2>

        <div className="user-posts-grid">
          {POSTS.map((post) => (
            <div key={post.id} className="user-post-card">
              <div className="user-post-image">
                <img src={post.image} alt={post.alt} />
                <span className={`user-category-badge ${post.categoryClass}`}>
                  {post.category}
                </span>
              </div>
              <div className="user-post-date">
                <span className="user-calendar-icon">📅</span>
                {post.date}
              </div>
              <h3 className="user-post-title">{post.title}</h3>
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
      <UserFooter />
    </div>
  );
}

export default UserHomePage;
