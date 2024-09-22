import React from "react";
import "./Form.css";
import { Link } from "react-router-dom";

const ResetPass = () => {
  return (
    <div className="LoginForm">
      <form method="post" action="" className="Form">
        <h2>Reset your password</h2>
        <span>To reset your password, enter your Email</span>
        <div className="info">
          <label htmlfor="email">
            <input
              type="Email"
              name="email"
              id="email"
              pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
              required=""
            />
          </label>
        </div>
        <button className="Button">Next</button>
        <Link to="/login">Back to login page</Link>
      </form>
    </div>
  );
};

export default ResetPass;
