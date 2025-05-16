import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./styles/SignupPage.css";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
  });

  const navigate = useNavigate();

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    const val = type === "radio" ? e.target.value : value;
    setFormData({ ...formData, [name]: val });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.first_name.trim())
      newErrors.first_name = "First name is required.";
    if (!formData.last_name.trim())
      newErrors.last_name = "Last name is required.";
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

  const handleSubmit = async (e) => {
    console.log("submit");
    console.log(formData);
    e.preventDefault();
    if (validate()) {
      console.log(formData);
      alert("Form submitted successfully!");
      const apiEndPoint = `http://localhost:3000/api/`;

      let response = await fetch(apiEndPoint + `${formData.role}s/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log(response);

      let json = await response.json();

      if (json.success == true) {
        navigate(`/${formData.role}`);
      }
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h1 className="signup-logo">SAMASTA KHABAR</h1>
        <h2 className="signup-heading">CREATE AN ACCOUNT</h2>
        <p className="subtext">
          Already have an account? <Link to="/">Log in</Link>
        </p>

        <form onSubmit={handleSubmit}>
          <div className="signup-form">
            <div className="form-row">
              <div>
                <input
                  type="text"
                  name="first_name"
                  placeholder="First name"
                  className="input"
                  onChange={handleChange}
                />
                {errors.first_name && (
                  <p className="error-text">{errors.first_name}</p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  name="last_name"
                  placeholder="Last name"
                  className="input"
                  onChange={handleChange}
                />
                {errors.last_name && (
                  <p className="error-text">{errors.last_name}</p>
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
