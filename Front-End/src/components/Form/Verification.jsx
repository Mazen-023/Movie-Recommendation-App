import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../config/index";
import toast from "react-hot-toast";

const Verification = () => {
  const [resetCode, setRestCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      resetCode,
    };
    try {
      setIsLoading(true);
      const response = await axiosInstance.post("/verifyResetCode", data);
      if (response.status === 200) {
        toast.success("Successfully", {
          position: "top-center",
          duration: 4000,
          style: {
            backgroundColor: "#4f46e5",
            color: "white",
            width: "fit-content",
          },
        });
        navigate("/newPassword");
      }
    } catch (error) {
      console.error(error);
      toast.error(`${error.response.data.message}`, {
        position: "top-center",
        duration: 1500,
        style: {
          backgroundColor: "red",
          color: "white",
          width: "fit-content",
        },
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="LoginForm flex justify-center items-center h-screen bg-gray-900 dark:bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="Form bg-gray-800 dark:bg-white text-gray-100 dark:text-gray-900 px-8 py-10 rounded-lg shadow-md max-w-md md:w-1/2 lg:w-1/3"
      >
        <h2 className="text-2xl text-center font-bold mb-6">Verification</h2>
        {/* <span className="block mb-4 text-sm font-medium">
          Enter the 6-digit verification code that sent to your email
        </span> */}
        <label htmlFor="code" className="block mb-6">
          <input
            type="text" // Change type to "text"
            id="code"
            value={resetCode}
            onChange={(e) => {
              // Allow only digits and limit to 6 characters
              const value = e.target.value;
              if (/^\d{0,6}$/.test(value)) {
                setRestCode(value);
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
          className="flex justify-center items-center w-full rounded-md bg-indigo-500 dark:bg-indigo-600 py-2 px-4 text-center text-white font-medium hover:bg-indigo-600 dark:hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
