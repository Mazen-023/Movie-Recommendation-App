import React, { useState } from "react";
// import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { loginUser } from "../../redux/slices/authSlice";
// import ThemeToggle from "../../Profile/ThemeToggle"; // Import ThemeToggle
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../config/index";
import toast from "react-hot-toast";
import Cookies from "js-cookie";

const Login = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const userData = { email, password };
    // dispatch(loginUser(userData));
    const data = {
      email,
      password,
    };
    try {
      setIsLoading(true);
      const response = await axiosInstance.post("/login", data);
      if (response.status === 201) {
        console.log("success", response.data.token);

        toast.success("Login Successfully.", {
          position: "top-center",
          duration: 1500,
          style: {
            backgroundColor: "#4f46e5",
            color: "white",
            width: "fit-content",
          },
        });
        Cookies.set("data", JSON.stringify(response.data), { expires: 1 });
        Cookies.set("id", response.data.data.id, { expires: 1 });
        console.log(response.data, "adsga");

        navigate("/");
      }
    } catch (error) {
      console.log(error.response.data.message);
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
    <div
      style={{
        height: "calc(100vh - 64px)",
      }}
      className="LoginForm flex justify-center items-center h-screen bg-gray-900 dark:bg-gray-100"
    >
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
