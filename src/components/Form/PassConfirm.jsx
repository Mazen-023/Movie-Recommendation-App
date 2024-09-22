import React, { useState } from "react";
import { Link } from "react-router-dom";

const PassConfirm = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="LoginForm flex justify-center items-center h-screen bg-gray-900">
      <form
        onSubmit={handleSubmit}
        className="Form bg-gray-800 text-white px-8 py-10 rounded-lg shadow-md max-w-md"
      >
        <h2 className="text-2xl text-center font-bold mb-6">Create a New Password</h2>
        <p className="block mb-4 text-sm text-center font-medium">
          Your new password must not be the same as your previous one
        </p>
        <label htmlFor="newPass" className="block mb-6">
          <input
            type="password"
            id="newPass"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="bg-gray-700 focus:ring-indigo-500 focus:border-indigo-500 rounded-md block w-full pl-3 pr-10 py-2 text-white sm:text-sm"
            placeholder="Type a password"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            required
          />
        </label>
        <label htmlFor="confirm" className="block mb-6">
          <input
            type="password"
            id="confirm"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="bg-gray-700 focus:ring-indigo-500 focus:border-indigo-500 rounded-md block w-full pl-3 pr-10 py-2 text-white sm:text-sm"
            placeholder="Confirm your password"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            required
          />
        </label>
        <button
          type="submit"
          className="mt-4 w-full rounded-md bg-indigo-600 py-2 px-4 text-center text-white font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Change Password
        </button>
        <p className="text-sm text-center text-indigo-600 hover:text-indigo-800 mt-4 block">
          <span>If you need further assistance, </span>
          <a href="#1" className="text-indigo-600 hover:text-indigo-800">
             Contact Support Team
          </a>
        </p>
      </form>
    </div>
  );
};

export default PassConfirm;