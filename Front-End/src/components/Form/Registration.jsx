import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signup, signupUser } from "../../redux/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import axiosInstance from "../../config/index";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  // const dispatch = useDispatch();
  // const { isLoading, error } = useSelector((state) => state.auth);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // dispatch(signupUser(formData));
    try {
      setIsLoading(true);
      const response = await axiosInstance.post("/signup", formData);
      if (response.status === 201) {
        toast.success("Register Successfully.", {
          position: "top-center",
          duration: 4000,
          style: {
            backgroundColor: "#4f46e5",
            color: "white",
            width: "fit-content",
          },
        });
        Cookies.set("jwt", response.data.token, { expires: 1 });
        Cookies.set("id", response.data.data.id, { expires: 1 });
        navigate("/");
      }
    } catch (error) {
      if (error) {
        error.response.data.errors.map((err) => {
          toast.error(`${err.msg}`, {
            position: "top-center",
            duration: 4000,
            style: {
              backgroundColor: "red",
              color: "white",
              width: "fit-content",
            },
          });
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      style={{
        height: "calc(100vh - 64px)",
      }}
      className="LoginForm flex justify-center items-center  bg-gray-900 dark:bg-gray-100"
    >
      <form
        onSubmit={handleSubmit}
        className="Form bg-gray-800 dark:bg-white text-gray-100 dark:text-gray-900 px-8 py-10 rounded-lg shadow-md max-w-md md:w-1/2 lg:w-1/3"
      >
        <h2 className="text-2xl text-center font-bold mb-6">
          Create a new account
        </h2>
        <div className="flex mb-6 space-x-4">
          {/* First Name */}
          <label htmlFor="firstName" className="flex-1">
            <input
              type="text"
              name="firstName"
              id="firstName"
              onChange={handleInputChange}
              className="bg-gray-700 dark:bg-gray-200 border border-gray-600 dark:border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 rounded-md block w-full pl-3 pr-10 py-2 text-gray-100 dark:text-gray-900 sm:text-sm"
              placeholder="First Name"
              required
            />
          </label>

          {/* Last Name */}
          <label htmlFor="lastName" className="flex-1">
            <input
              type="text"
              name="lastName"
              id="lastName"
              onChange={handleInputChange}
              className="bg-gray-700 dark:bg-gray-200 border border-gray-600 dark:border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 rounded-md block w-full pl-3 pr-10 py-2 text-gray-100 dark:text-gray-900 sm:text-sm"
              placeholder="Last Name"
              required
            />
          </label>
        </div>

        {/* Email */}
        <label htmlFor="email" className="block mb-6">
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleInputChange}
            className="bg-gray-700 dark:bg-gray-200 border border-gray-600 dark:border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 rounded-md block w-full pl-3 pr-10 py-2 text-gray-100 dark:text-gray-900 sm:text-sm"
            placeholder="Email"
            pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
            required
          />
        </label>
        {/* Password */}
        <label htmlFor="password" className="block mb-6">
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleInputChange}
            className="bg-gray-700 dark:bg-gray-200 border border-gray-600 dark:border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 rounded-md block w-full pl-3 pr-10 py-2 text-gray-100 dark:text-gray-900 sm:text-sm"
            placeholder="Password"
            // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            required
          />
        </label>
        {/* Confirm Password */}
        <label htmlFor="passwordConfirm" className="block mb-6">
          <input
            type="password"
            id="passwordConfirm"
            name="passwordConfirm"
            onChange={handleInputChange}
            className="bg-gray-700 dark:bg-gray-200 border border-gray-600 dark:border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 rounded-md block w-full pl-3 pr-10 py-2 text-gray-100 dark:text-gray-900 sm:text-sm"
            placeholder="Confirm Password"
            // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            required
          />
        </label>
        {/* Registration Button */}
        <button
          type="submit"
          className="flex justify-center items-center mt-4 w-full rounded-md bg-indigo-500 dark:bg-indigo-600 py-2 px-4 text-center text-white font-medium hover:bg-indigo-600 dark:hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          {isLoading ? (
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          ) : (
            ""
          )}
          Registeration
        </button>
        {/* Login Link */}
        <Link
          to="/login"
          className="text-sm text-center text-indigo-400 dark:text-indigo-600 hover:text-indigo-300 dark:hover:text-indigo-800 mt-4 block"
        >
          Already have an account! Login
        </Link>
      </form>
    </div>
  );
};

export default Registration;
