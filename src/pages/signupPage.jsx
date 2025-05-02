import React from "react";
import { Link } from "react-router-dom";
import "./styles/signupPage.css";

const SignupPage = () => {
  return (
    <div className="signup-container">
      <div className="signup-box">
        <h1 className="logo">SAMASTA KHABAR</h1>
        <h2 className="heading">CREATE AN ACCOUNT</h2>
        <p className="subtext">
          Already have an account? <Link to="/login">Log in</Link>
        </p>

        <div className="signup-form">
          <div className="form-row">
            <input type="text" placeholder="First name" className="input" />
            <input type="text" placeholder="Last name" className="input" />
          </div>
          <input type="email" placeholder="Email address" className="input" />
          <div className="form-row">
            <input type="password" placeholder="Password" className="input" />
            <input
              type="password"
              placeholder="Confirm your password"
              className="input"
            />
          </div>

          <div className="account-type">
            <label>Create an Account as:</label>
            <div className="radio-options">
              <label>
                <input type="radio" name="role" /> User
              </label>
              <label>
                <input type="radio" name="role" /> News Reporter
              </label>
            </div>
          </div>

          <button className="signup-button">Create an account</button>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default SignupPage;
