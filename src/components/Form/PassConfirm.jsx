import React from "react";
import "./Form.css";

const PassConfirm = () => {
  return (
    <div className="LoginForm">
      <form method="post" action="" className="Form">
        <h2>Create a New Password</h2>
        <div className="info">
          <p>
          Your new password must not be the same as your previous one
          </p>
          <label htmlfor="newPass">
            <input
              type="password"
              name="newPass"
              id="newPass"
              placeholder="Type a password"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              required
            />
          </label>
        </div>
        <div className="info">
          <label htmlfor="confirm">
            <input
              type="Password"
              name="confirm"
              id="confirm"
              placeholder="Confirm your password"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              required
            />
          </label>
        </div>
        <button className="Button">Change Password</button>
        <p>
          If you need further assistance?
          <a href="#1">
            <span> Contact Support Team</span>
          </a>
        </p>
      </form>
    </div>
  );
};

export default PassConfirm;
