import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { loginUser } from "../../redux/slices/authSlice";
import ThemeToggle from "../../Profile/ThemeToggle"; // Import ThemeToggle

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { email, password };
    dispatch(loginUser(userData));
  };

  return (
    <div className="LoginForm flex justify-center items-center h-screen bg-gray-900 dark:bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="Form bg-gray-800 dark:bg-white text-gray-100 dark:text-gray-900 px-8 py-10 rounded-lg shadow-md max-w-md md:w-1/2 lg:w-1/3"
      >
        <h2 className="text-2xl text-center font-bold mb-6">
          Sign in to your account
        </h2>

        <label className="block mb-6">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-gray-700 dark:bg-gray-200 border border-gray-600 dark:border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 rounded-md block w-full pl-3 pr-10 py-2 text-gray-100 dark:text-gray-900 sm:text-sm"
            placeholder="Email"
            required
          />
        </label>

        <label className="block mb-6">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-gray-700 dark:bg-gray-200 border border-gray-600 dark:border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 rounded-md block w-full pl-3 pr-10 py-2 text-gray-100 dark:text-gray-900 sm:text-sm"
            placeholder="Password"
            required
          />
        </label>

        <Link
          to="/reset"
          className="text-indigo-400 dark:text-indigo-600 hover:text-indigo-300 dark:hover:text-indigo-800 inline-flex items-center"
        >
          Forgot Password?
        </Link>

        <button
          type="submit"
          className="mt-4 w-full rounded-md bg-indigo-500 dark:bg-indigo-600 py-2 px-4 text-center text-white font-medium hover:bg-indigo-600 dark:hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Sign in
        </button>

        <Link
          to="/registration"
          className="text-sm text-center text-indigo-400 dark:text-indigo-600 hover:text-indigo-300 dark:hover:text-indigo-800 mt-4 block"
        >
          Do not have an Account? Sign Up
        </Link>
      </form>
    </div>
  );
};

export default Login;
