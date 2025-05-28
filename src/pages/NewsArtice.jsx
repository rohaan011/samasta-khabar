import { useParams } from "react-router-dom";
import { POSTS, mainPost, sidePosts } from "../utils/posts";
import TopHeader from "../components/TopHeader";
import BottomFooter from "../components/BottomFooter";
import "./styles/NewsArticle.css";

function NewsArticle() {
  const { id } = useParams();
  const post = POSTS.find((item) => String(item.id) === String(id));

  if (!post) {
    return (
      <>
        <TopHeader />
        <main className="container">
          <h2>Article not found!</h2>
        </main>
        <BottomFooter />
      </>
    );
  }

  return (
    <>
      <TopHeader />

      <main className="container">
        <div className="mb-4">
          <span className={`bg-${post.categoryClass}`}>{post.category}</span>
        </div>

        <div className="title">{post.title}</div>

        <div className="featured-image">
          <img src={post.image} alt={post.alt} />
        </div>
        <div className="meta">
          <p>By Samasta Reporter</p>
          <p>{post.date}</p>
        </div>

        <article className="article-content">
          <p>{post.content}</p>
        </article>
      </main>

      <BottomFooter />
    </>
  );
}

export default NewsArticle;
