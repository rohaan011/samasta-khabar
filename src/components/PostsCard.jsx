import React from "react";
import "../components/styles/PostsCard.css";

const PostsCard = ({ posts }) => {
  return (
    <div className="posts-grid">
      {posts.length > 0 ? (
        posts.map((post, index) => (
          <div key={index} className="post-card">
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
  );
};

export default PostsCard;
