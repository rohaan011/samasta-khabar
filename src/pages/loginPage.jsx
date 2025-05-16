import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebookF, FaApple, FaGoogle } from "react-icons/fa";
import "./styles/LoginPage.css";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate(); // for navigation after login

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email or phone is required.";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validate()) {
      try {
        const apiEndPoint = `http://localhost:3000/api`;

        const response = await fetch(apiEndPoint + `${formData.role}s/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        const json = await response.json();
        console.log(json);

        if (json.success === true) {
          alert("Login successful!");
          navigate(`/${formData.role}`);
        } else {
          alert(json.message || "Invalid credentials.");
        }
      } catch (error) {
        console.error("Error during login:", error);
        alert("An error occurred during login. Please try again later.");
      }
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-logo">SAMASTA KHABAR</h1>
        <h2 className="login-heading">LOGIN TO YOUR ACCOUNT</h2>
        <p className="login-subtext">Sign In to Get the Latest Updates</p>

        <form onSubmit={handleSubmit}>
          <div className="login-content">
            <div className="login-left">
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email / Phone"
                  className="login-input"
                  onChange={handleChange}
                />
                {errors.email && <p className="error-text">{errors.email}</p>}
              </div>

              <div>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="login-input"
                  onChange={handleChange}
                />
                {errors.password && (
                  <p className="error-text">{errors.password}</p>
                )}
              </div>

              <button type="submit" className="login-button">
                Login to Your Account →
              </button>
            </div>

            <div className="login-right">
              <button type="button" className="login-social-button">
                <FaGoogle style={{ marginRight: "8px" }} /> Sign in with Gmail
              </button>
              <button type="button" className="login-social-button">
                <FaFacebookF style={{ marginRight: "8px" }} /> Sign in with
                Facebook
              </button>

              <button type="button" className="login-social-button">
                <FaApple style={{ marginRight: "8px" }} /> Sign in with Apple
              </button>
            </div>
          </div>
        </form>

        <div className="login-extra">
          <p className="forgot">Forgot Passcode?</p>
          <p className="signup-prompt">Don’t have an account?</p>
          <Link to="/signup" className="login-signup-button">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
