import React from "react";
import { FaTwitter, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import appstoreImg from "../assets/appstore.png";
import googleplayImg from "../assets/googleplay.png";
import "../components/styles/UserFooter.css";

const UserFooter = () => {
  return (
    <footer className="user-footer">
      <div className="footer-columns">
        <div>
          <p className="footer-logo">SAMASTA KHABAR</p>
          <div className="stores">
            <img src={appstoreImg} alt="App Store" className="store-icon" />
            <img src={googleplayImg} alt="Google Play" className="store-icon" />
          </div>
        </div>

        <div>
          <a href="#home">Home</a>
          <a href="#politics">Politics</a>
          <a href="#business">Business</a>
          <a href="#sports">Sports</a>
        </div>

        <div>
          <p>About Us</p>
          <p>Advertise</p>
          <p>Contact Us</p>
          <p>Terms & Conditions</p>
        </div>

        <div>
          <p>Interact with Us</p>
          <div className="socials">
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
        </div>
      </div>

      <div className="bot-footer">
        <p>© All copyright reserved by Samasta Khabar</p>
      </div>
    </footer>
  );
};

export default UserFooter;
