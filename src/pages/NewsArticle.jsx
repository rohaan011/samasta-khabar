import { useParams } from "react-router-dom";
import { POSTS, mainPost, sidePosts } from "../utils/posts";
import TopHeader from "../components/TopHeader";
import BottomFooter from "../components/BottomFooter";
import "./styles/NewsArticle.css";
import { useTranslation } from "react-i18next";

function NewsArticle() {
  const { id } = useParams();
  const { t } = useTranslation();
  const post = POSTS.find((item) => String(item.id) === String(id));

  if (!post) {
    return (
      <>
        <TopHeader />
        <main className="container">
          <h2>{t("articleNotFound", "Article not found!")}</h2>
        </main>
        <BottomFooter />
      </>
    );
  }

  return (
    <>
      <TopHeader />

      <main className="container">
        <div className="article-category">
          <span className={`article-category bg-${post.categoryClass}`}>
            {t(
              `posts.categories.${post.category.toLowerCase()}`,
              post.category
            )}
          </span>
        </div>

        <div className="article-title">
          {t(`posts.${post.id}.title`, post.title)}
        </div>

        <div className="article-image">
          <img src={post.image} alt={post.alt} />
        </div>

        <div className="meta">
          <p>{t("byReporter", "By Samasta Reporter")}</p>
          <p>{post.date}</p>
        </div>

        <article className="article-content">
          <p>{t(`posts.${post.id}.content`, post.content)}</p>
        </article>
      </main>

      <BottomFooter />
    </>
  );
}

export default NewsArticle;
