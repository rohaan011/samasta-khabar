import React from "react";
import "../components/styles/HeroSection.css";
import { useTranslation } from "react-i18next";

const PostCard = ({ post, onArticleClick }) => {
  const { t } = useTranslation();

  return (
    <div className="user-post-card" onClick={() => onArticleClick(post.id)}>
      <div className="user-post-image">
        <img src={post.image} alt={post.alt} />
        <span className={`user-category-badge ${post.categoryClass}`}>
          {/* fetch category label from translations */}
          {t(`posts.categories.${post.category.toLowerCase()}`, post.category)}
        </span>
      </div>
      <div className="user-post-date">
        <span className="user-calendar-icon">📅</span>
        {post.date}
      </div>
      <h3 className="user-post-title">
        {/* fetch post title from translations */}
        {t(`posts.${post.id}.title`, post.title)}
      </h3>
    </div>
  );
};

const HeroSection = ({ mainPost, sidePosts, onArticleClick }) => {
  return (
    <section id="home" className="hero">
      <div className="hero-main">
        <PostCard post={mainPost} onArticleClick={onArticleClick} />
      </div>

      <div className="hero-side">
        {sidePosts.map((post) => (
          <PostCard key={post.id} post={post} onArticleClick={onArticleClick} />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
