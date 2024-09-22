import React, { useState } from "react";
import { Link } from "react-router-dom";

const Verification = () => {
  const [verificationCode, setVerificationCode] = useState("");

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
        <h2 className="text-2xl text-center font-bold mb-6">Verification</h2>
        <span className="block mb-4 text-sm font-medium">
          Enter the 6-digit verification code that sent to your email
        </span>
        <label htmlFor="code" className="block mb-6">
          <input
            type="number"
            id="code"
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
            className="bg-gray-700 focus:ring-indigo-500 focus:border-indigo-500 rounded-md block w-full pl-3 pr-10 py-2 text-white sm:text-sm"
            placeholder="Verification Code"
            required
          />
        </label>
        <button
          type="submit"
          className="mt-4 w-full rounded-md bg-indigo-600 py-2 px-4 text-center text-white font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Verify
        </button>
        <Link to="/login" className="text-sm text-center text-indigo-600 hover:text-indigo-800 mt-4 block">
          Back to login page
        </Link>
      </form>
    </div>
  );
};

export default Verification;