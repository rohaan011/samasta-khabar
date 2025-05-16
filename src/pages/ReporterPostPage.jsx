import React, { useState } from "react";
import "./styles/ReporterPostPage.css";
import { LuImagePlus } from "react-icons/lu";

const ReporterPostPage = () => {
  const [articleData, setArticleData] = useState({
    title: "",
    content: "",
    category: "",
    image: null,
  });

  const categories = [
    "Politics",
    "Business",
    "Sports",
    "Health",
    "Technology",
    "World News",
    "Lifestyle",
  ];

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setArticleData({ ...articleData, image: files[0] });
    } else {
      setArticleData({ ...articleData, [name]: value });
    }
  };

  const handleCategoryClick = (category) => {
    setArticleData({ ...articleData, category });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(articleData);
    // you can post this to your API
  };

  return (
    <div className="post-container">
      <form onSubmit={handleSubmit}>
        <div className="image-upload">
          <label htmlFor="image">
            <div className="upload-box">
              <span className="upload-icon">
                <LuImagePlus />
              </span>
              <p>Upload from computer</p>
            </div>
          </label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleChange}
            hidden
          />
        </div>

        <input
          type="text"
          name="title"
          placeholder="TITLE"
          value={articleData.title}
          onChange={handleChange}
          className="input"
        />

        <textarea
          name="content"
          placeholder="Write the complete article here..."
          value={articleData.content}
          onChange={handleChange}
          className="textarea"
        ></textarea>

        <div className="category-section">
          <label>Category</label>
          <div className="category-buttons">
            {categories.map((cat) => (
              <button
                type="button"
                key={cat}
                className={`category-btn ${
                  articleData.category === cat ? "active" : ""
                }`}
                onClick={() => handleCategoryClick(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <button type="submit" className="post-button">
          Post
        </button>
      </form>
    </div>
  );
};

export default ReporterPostPage;
