import React from "react";
import "../components/styles/PostsCard.css";
import { useTranslation } from "react-i18next";

const PostsCard = ({ posts, onPostClick }) => {
  const { t } = useTranslation();

  return (
    <div className="posts-grid">
      {posts.length > 0 ? (
        posts.map((post) => (
          <div
            key={post.id}
            className="post-card"
            onClick={() => onPostClick(post.id)}
          >
            <div className="post-image">
              <img src={post.image} alt={post.alt} />
              <span className={`category-badge ${post.categoryClass}`}>
                {/* fetch category label from translations */}
                {t(
                  `posts.categories.${post.category.toLowerCase()}`,
                  post.category
                )}
              </span>
            </div>
            <div className="post-date">
              <span className="calendar-icon">📅</span> {post.date}
            </div>
            <h3 className="post-title">
              {/* fetch post title from translations */}
              {t(`posts.${post.id}.title`, post.title)}
            </h3>
          </div>
        ))
      ) : (
        <p className="no-posts">{t("noPosts", "No news available.")}</p>
      )}
    </div>
  );
};

export default PostsCard;
