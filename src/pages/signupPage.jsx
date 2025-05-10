import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/signupPage.css";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    const val = type === "radio" ? e.target.value : value;
    setFormData({ ...formData, [name]: val });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required.";
    if (!formData.lastName.trim())
      newErrors.lastName = "Last name is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email address.";

    if (!formData.password) newErrors.password = "Password is required.";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match.";

    if (!formData.role) newErrors.role = "Please select an account type.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted successfully!");
      // Submit logic here (e.g., API call)
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h1 className="logo">SAMASTA KHABAR</h1>
        <h2 className="heading">CREATE AN ACCOUNT</h2>
        <p className="subtext">
          Already have an account? <Link to="/login">Log in</Link>
        </p>

        <form onSubmit={handleSubmit}>
          <div className="signup-form">
            <div className="form-row">
              <div>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  className="input"
                  onChange={handleChange}
                />
                {errors.firstName && (
                  <p className="error-text">{errors.firstName}</p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  className="input"
                  onChange={handleChange}
                />
                {errors.lastName && (
                  <p className="error-text">{errors.lastName}</p>
                )}
              </div>
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Email address"
                className="input"
                onChange={handleChange}
              />
              {errors.email && <p className="error-text">{errors.email}</p>}
            </div>

            <div className="form-row">
              <div>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="input"
                  onChange={handleChange}
                />
                {errors.password && (
                  <p className="error-text">{errors.password}</p>
                )}
              </div>
              <div>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  className="input"
                  onChange={handleChange}
                />
                {errors.confirmPassword && (
                  <p className="error-text">{errors.confirmPassword}</p>
                )}
              </div>
            </div>

            <div className="account-type">
              <label>Create an Account as:</label>
              <div className="radio-options">
                <label>
                  <input
                    type="radio"
                    name="role"
                    value="user"
                    onChange={handleChange}
                  />{" "}
                  User
                </label>
                <label>
                  <input
                    type="radio"
                    name="role"
                    value="reporter"
                    onChange={handleChange}
                  />{" "}
                  News Reporter
                </label>
              </div>
              {errors.role && <p className="error-text">{errors.role}</p>}
            </div>

            <button type="submit" className="signup-button">
              Create an account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
