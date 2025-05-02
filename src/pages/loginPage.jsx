import React from "react";
import { Link } from "react-router-dom";
import "./styles/loginPage.css";
import Footer from "../components/footer";


const LoginPage = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="logo">SAMASTA KHABAR</h1>
        <h2 className="heading">LOGIN TO YOUR ACCOUNT</h2>
        <p className="subtext">Sign In to Get the Latest Updates</p>

        <div className="login-content">
          <div className="login-left">
            <input type="text" placeholder="Email / Phone" className="input" />
            <input type="password" placeholder="Password" className="input" />
            <Link to="/user" className="login-button">
              Login to Your Account →
            </Link>          </div>

          <div className="login-right">
            <button className="social-button">G Sign in with Gmail</button>
            <button className="social-button">f Sign in with Facebook</button>
            <button className="social-button"> Sign in with Apple</button>
          </div>
        </div>

        <div className="extras">
          <p className="forgot">Forgot Passcode?</p>
          <p className="signup-prompt">Don’t have an account?</p>
          <Link to="/" className="signup-button">
            Sign up
          </Link>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default LoginPage;
