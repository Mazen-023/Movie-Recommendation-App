import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="LoginForm flex justify-center items-center h-screen bg-gray-900">
      <form
        method="post"
        action=""
        className="Form bg-gray-800 text-white px-8 py-10 rounded-lg shadow-md max-w-md md:w-1/2 lg:w-1/3"
      >
        <h2 className="text-2xl font-bold mb-6">Sign in to your account</h2>
        <label className="mb-6">
          <input
            type="email"
            id="Email"
            className="bg-gray-700 focus:ring-indigo-500 focus:border-indigo-500 rounded-md block w-full pl-3 pr-10 py-2 text-white sm:text-sm"
            placeholder="Email"
            pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
            required
          />
        </label>
        <div class="w-full h-px my-4"></div>
        <label className="mb-6">
          <input
            type="password"
            id="Password"
            className="bg-gray-700 focus:ring-indigo-500 focus:border-indigo-500 rounded-md block w-full pl-3 pr-10 py-2 text-white sm:text-sm"
            placeholder="Password"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            required
          />
        </label>
        <div class="w-full h-px my-2"></div>
        <Link to="/reset" className="text-indigo-600 hover:text-indigo-800 inline-flex items-center">
          Forgot Password?
        </Link>
        <button
          type="submit"
          className="mt-4 w-full rounded-md bg-indigo-600 py-2 px-4 text-center text-white font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Sign in
        </button>
        <Link to="/registration" className="text-sm text-indigo-600 hover:text-indigo-800 mt-4 block">
          Do not have an Account? Sign Up
        </Link>
      </form>
    </div>
  );
};

export default Login;