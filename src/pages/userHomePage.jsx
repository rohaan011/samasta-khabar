import React, { useState, useEffect } from "react";
import "./styles/UserHomePage.css";
import UserFooter from "../components/UserFooter";
import UserHeader from "../components/UserHeader";
import Weather from "../components/Weather";
import PostsCard from "../components/PostsCard";
import { POSTS, mainPost, sidePosts } from "../utils/posts";
import { useNavigate } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import { useTranslation } from "react-i18next";

function UserHomePage() {
  const { t } = useTranslation();
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

  const api = {
    key: "cd0ba1a5d5c3f451ea789947f8617bb1",
    base: "https://api.openweathermap.org/data/2.5/",
  };
  const navigate = useNavigate();

  const onArticleClick = (id) => {
    navigate(`/newsarticle/${id}`);
  };

  return (
    <div className="container">
      <UserHeader />
      <div>
        <HeroSection
          mainPost={mainPost}
          sidePosts={sidePosts}
          onArticleClick={onArticleClick}
        />
      </div>

      <section className="photo-of-day">
        <h3 className="text-of-day">{t("homepage.photoOfTheDay")}</h3>
        <img
          src="https://images.travelandleisureasia.com/wp-content/uploads/sites/3/2024/01/19201004/kathmandu.jpeg"
          alt="Photo of the Day"
        />
      </section>

      <section className="latest-news-section">
        <h2 className="user-section-title">{t("homepage.latestNews")}</h2>

        <PostsCard posts={POSTS} onPostClick={onArticleClick} />
      </section>

      <section className="weather-fun">
        <Weather />
      </section>

      <section id="politics" className="Politics-news-section">
        <h2 className="user-section-title">{t("header.politics")}</h2>
        <PostsCard
          posts={POSTS.filter((post) => post.category === "Politics")}
          onPostClick={onArticleClick}
        />
      </section>

      <section id="business" className="Business-news-section">
        <h2 className="user-section-title">{t("header.business")}</h2>
        <PostsCard
          posts={POSTS.filter((post) => post.category === "Business")}
          onPostClick={onArticleClick}
        />
      </section>

      <section id="health" className="Health-news-section">
        <h2 className="user-section-title">{t("header.health")}</h2>
        <PostsCard
          posts={POSTS.filter((post) => post.category === "Health")}
          onPostClick={onArticleClick}
        />
      </section>

      <section id="sports" className="Sports-news-section">
        <h2 className="user-section-title">{t("header.sports")}</h2>
        <PostsCard
          posts={POSTS.filter((post) => post.category === "Sports")}
          onPostClick={onArticleClick}
        />
      </section>

      <section id="technology" className="Technology-news-section">
        <h2 className="user-section-title">{t("header.technology")}</h2>
        <PostsCard
          posts={POSTS.filter((post) => post.category === "Technology")}
          onPostClick={onArticleClick}
        />
      </section>

      <section id="world" className="World-news-section">
        <h2 className="user-section-title">{t("header.world")}</h2>
        <PostsCard
          posts={POSTS.filter((post) => post.category === "World")}
          onPostClick={onArticleClick}
        />
      </section>

      <section id="lifestyle" className="Lifestyle-news-section">
        <h2 className="user-section-title">{t("header.lifestyle")}</h2>
        <PostsCard
          posts={POSTS.filter((post) => post.category === "Lifestyle")}
          onPostClick={onArticleClick}
        />
      </section>

      <UserFooter />
    </div>
  );
}

export default UserHomePage;
