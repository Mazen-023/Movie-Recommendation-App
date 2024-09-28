import React, { useState } from "react";
import { Link } from "react-router-dom";

const Verification = () => {
  const [verificationCode, setVerificationCode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="LoginForm flex justify-center items-center h-screen bg-gray-900 dark:bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="Form bg-gray-800 dark:bg-white text-gray-100 dark:text-gray-900 px-8 py-10 rounded-lg shadow-md max-w-md md:w-1/2 lg:w-1/3"
      >
        <h2 className="text-2xl text-center font-bold mb-6">Verification</h2>
        <span className="block mb-4 text-sm font-medium">
          Enter the 6-digit verification code that sent to your email
        </span>
        <label htmlFor="code" className="block mb-6">
          <input
            type="text" // Change type to "text"
            id="code"
            value={verificationCode}
            onChange={(e) => {
              // Allow only digits and limit to 6 characters
              const value = e.target.value;
              if (/^\d{0,6}$/.test(value)) {
                setVerificationCode(value);
              }
            }}
            className="bg-gray-700 dark:bg-gray-200 border border-gray-600 dark:border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 rounded-md block w-full pl-3 pr-10 py-2 text-gray-100 dark:text-gray-900 sm:text-sm"
            placeholder="Verification Code"
            required
            pattern="\d{6}" // Optional: restrict to 6 digits
            maxLength={6} // Limit input to 6 characters
          />
        </label>
        <button
          type="submit"
          className="mt-4 w-full rounded-md bg-indigo-500 dark:bg-indigo-600 py-2 px-4 text-center text-white font-medium hover:bg-indigo-600 dark:hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Verify
        </button>
        <Link
          to="/login"
          className="text-sm text-center text-indigo-400 dark:text-indigo-600 hover:text-indigo-300 dark:hover:text-indigo-800 mt-4 block"
        >
          Back to login page
        </Link>
      </form>
    </div>
  );
};

export default Verification;
