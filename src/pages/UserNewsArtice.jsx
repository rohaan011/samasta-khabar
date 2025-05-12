import { useState } from "react";
import UserHeader from "../components/UserHeader";
import "./styles/UserNewsArticle.css";
import UserFooter from "../components/UserFooter";

export default function UserNewsArticle() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <UserHeader />

      {/* Main Content */}
      <main className="container">
        {/* Category Badge */}
        <div className="mb-4">
          <span className="bg-purple">Politics</span>
        </div>

        {/* Article Title */}
        <div className="title">
          National ID Card Not Mandatory For Citizens Above 90 To Access
          Services
        </div>

        {/* Featured Image */}
        <div className="featured-image">
          <img
            src="https://english.onlinekhabar.com/wp-content/uploads/2025/03/Ramesh-lekhak-1230-1024x671-1.jpg"
            alt="Government"
          />
        </div>
        <div className="meta">
          <p>Rohan Prajapati</p>
          <p>10 March 2025</p>
        </div>

        {/* Article Content */}
        <article className="article-content">
          <p>
            In a move aimed at making public services more accessible to the
            country's oldest citizens, the Government of Nepal has officially
            announced that individuals aged 90 and above will no longer be
            required to present a National Identity Card to access government
            and administrative services. The exemption comes amid growing
            concerns regarding the difficulties faced by elderly citizens in
            completing the formal processes involved in obtaining the
            biometric-based National ID card.
          </p>
        </article>
        <UserFooter />
      </main>
    </>
  );
}
