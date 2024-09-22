import React from "react";
import "./Form.css";
import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <div className="LoginForm">
      <form method="post" action="" className="Form">
        <h2>Create a new account</h2>
        <div className="info">
          <label htmlfor="Fname" id="fName">
            <input
              type="text"
              name="Fname"
              id="Fname"
              placeholder="First Name"
              required=""
            />
          </label>
          <label htmlfor="Lname" id="lName">
            <input
              type="text"
              name="Lname"
              id="Lname"
              placeholder="Last Name"
              required=""
            />
          </label>
        </div>
        <div className="info">
          <label htmlfor="Email">
            <input
              type="email"
              name="Name"
              id="Email"
              placeholder="Email"
              pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
              required=""
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
              required=""
            />
            <div />
            <input
              type="Password"
              name="Password"
              id="Password"
              placeholder="Confirm Password"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              required=""
            />
          </label>
        </div>
        <button className="Button">Registration</button>
        <Link to="/login">Already have an account! Login</Link>
      </form>
    </div>
  );
};

export default Registration;
