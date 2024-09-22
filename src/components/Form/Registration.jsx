import React, { useState } from "react";
import { Link } from "react-router-dom";

const Registration = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="LoginForm flex justify-center items-center h-screen bg-gray-900">
      <form
        onSubmit={handleSubmit}
        className="Form bg-gray-800 text-white px-8 py-10 rounded-lg shadow-md max-w-md md:w-1/2 lg:w-1/3"
      >
        <h2 className="text-2xl font-bold mb-6">Create a new account</h2>
        <div className="flex mb-6">
          {/* First Name */}
          <label htmlFor="Fname" className="flex flex-wrap">
            <input
              type="text"
              name="Fname"
              id="Fname"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="flex-1 mr-2 bg-gray-700 focus:ring-indigo-500 focus:border-indigo-500 rounded-md block w-full pl-3 pr-10 py-2 text-white sm:text-sm"
              placeholder="First Name"
              required
            />
          {/* Last Name */}
            <input
              type="text"
              name="Lname"
              id="Lname"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="flex-1 bg-gray-700 focus:ring-indigo-500 focus:border-indigo-500 rounded-md block w-full pl-3 pr-10 py-2 text-white sm:text-sm"
              placeholder="Last Name"
              required
            />
          </label>
        </div>
        {/* Email */}
        <label htmlFor="Email" className="block mb-6">
          <input
            type="email"
            id="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-gray-700 focus:ring-indigo-500 focus:border-indigo-500 rounded-md block w-full pl-3 pr-10 py-2 text-white sm:text-sm"
            placeholder="Email"
            pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
            required
          />
        </label>
        {/* Password */}
        <label htmlFor="Password" className="block mb-6">
          <input
            type="password"
            id="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-gray-700 focus:ring-indigo-500 focus:border-indigo-500 rounded-md block w-full pl-3 pr-10 py-2 text-white sm:text-sm"
            placeholder="Password"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            required
          />
        </label>
        {/* Confirm Password */}
        <label htmlFor="ConfirmPassword" className="block mb-6">
          <input
            type="password"
            id="ConfirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="bg-gray-700 focus:ring-indigo-500 focus:border-indigo-500 rounded-md block w-full pl-3 pr-10 py-2 text-white sm:text-sm"
            placeholder="Confirm Password"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            required
          />
        </label>
        {/* Registration Button */}
        <button
          type="submit"
          className="mt-4 w-full rounded-md bg-indigo-600 py-2 px-4 text-center text-white font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Registration
        </button>
        {/* Login Link */}
        <Link to="/login" className="text-sm text-indigo-600 hover:text-indigo-800 mt-4 block">
          Already have an account! Login
        </Link>
      </form>
    </div>
  );
};

export default Registration;