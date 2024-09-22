import React from "react";
import "./Form.css";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="LoginForm">
      <form method="post" action="" className="Form">
        <h2>Sign in to your account</h2>
        <div className="info">
          <label htmlfor="Email">
            <input
              type="email"
              name="Name"
              id="Email"
              placeholder="Email"
              pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
              required
            />
          </label>
        </div>
        <div className="info">
          <label htmlfor="Password">
            <input
              type="Password"
              name="Password"
              id="Password"
              placeholder="Password"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              required
            />
          </label>
        </div>
        <Link to="/reset">Forgot Password?</Link>
        <button className="Button">Sign in</button>
        {/* <div className="orLogin">
          <div className="line" />
          <div className="or">
            <p>or login with</p>
          </div>
          <div className="line" />
        </div>
        <div className="icons">
          <div className="icon">
            <a href="#0">
              <i className="fa-brands fa-windows" />
            </a>
            <a href="#1">Microsoft</a>
          </div>
          <div className="icon">
            <a href="#2">
              <i className="fa-brands fa-google" />
            </a>
            <a href="#3">Google</a>
          </div>
        </div> */}
        <Link to="/registration">Do not have an Account? Sign Up</Link>
      </form>
    </div>
  );
};

export default Login;
