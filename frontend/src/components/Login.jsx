import React from "react";
import useField from "../hooks/useField";
import useLogin from "../hooks/useLogin";
import "./styles/Login.css";

const Login = ({ setIsAuthenticated }) => {
  const login = useLogin({ setIsAuthenticated });

  const email = useField("email");
  const password = useField("password");

  const handleSubmit = (e) => {
    e.preventDefault();

    login(email.value, password.value);
  };

  return (
    <div className="login-page">
      <form className="login-form" onSubmit={handleSubmit}>
        <label className="email-message" htmlFor="email">
          Email:
        </label>
        <input {...email} className="email-input" required />

        <label className="password-message" htmlFor="password">
          Password:
        </label>
        <input {...password} className="password-input" required />

        <button className="login-button" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;