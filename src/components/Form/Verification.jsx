import React from "react";
import "./Form.css";
import { Link } from "react-router-dom";

const Verification = () => {
  return (
    <div className="LoginForm">
      <form method="post" action="" className="Form">
        <h2 id="upperCase">Verification</h2>
        <span>Enter the 6-digit verification code that sent to your email</span>
        <div className="info">
          <label htmlfor="code">
            <input type="number" name="code" id="code" required="" />
          </label>
        </div>
        <button className="Button">Verify</button>
        <Link to="/login">Back to login page</Link>
      </form>
    </div>
  );
};

export default Verification;
