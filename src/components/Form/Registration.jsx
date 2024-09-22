import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signup, signupUser } from "../../redux/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";

const Registration = () => {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    name: "",
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

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signupUser(formData));
  };

  return (
    <div className="LoginForm flex justify-center items-center h-screen bg-gray-900">
      <form
        onSubmit={handleSubmit}
        className="Form bg-gray-800 text-white px-8 py-10 rounded-lg shadow-md max-w-md md:w-1/2 lg:w-1/3"
      >
        <h2 className="text-2xl text-center font-bold mb-6">
          Create a new account
        </h2>
        <div className="flex mb-6">
          {/* First Name */}
          <label htmlFor="name" className="flex flex-wrap">
            <input
              type="text"
              name="name"
              id="name"
              onChange={handleInputChange}
              className="flex-1 mr-2 bg-gray-700 focus:ring-indigo-500 focus:border-indigo-500 rounded-md block w-full pl-3 pr-10 py-2 text-white sm:text-sm"
              placeholder="Name"
              required
            />
            {/* Last Name */}
            <input
              type="text"
              name="Lname"
              id="Lname"
              onChange={handleInputChange}
              className="flex-1 bg-gray-700 focus:ring-indigo-500 focus:border-indigo-500 rounded-md block w-full pl-3 pr-10 py-2 text-white sm:text-sm"
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
            className="bg-gray-700 focus:ring-indigo-500 focus:border-indigo-500 rounded-md block w-full pl-3 pr-10 py-2 text-white sm:text-sm"
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
            className="bg-gray-700 focus:ring-indigo-500 focus:border-indigo-500 rounded-md block w-full pl-3 pr-10 py-2 text-white sm:text-sm"
            placeholder="Password"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
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
        <Link
          to="/login"
          className="text-sm text-center text-indigo-600 hover:text-indigo-800 mt-4 block"
        >
          Already have an account! Login
        </Link>
      </form>
    </div>

    // <div className="LoginForm flex justify-center items-center h-screen bg-gray-900">
    //   <h1>Sign Up</h1>
    //   <form
    //     onSubmit={handleSubmit}
    //     className="Form bg-gray-800 text-white px-8 py-10 rounded-lg shadow-md max-w-md md:w-1/2 lg:w-1/3"
    //   >
    //     <input
    //       type="text"
    //       name="name"
    //       value={formData.name}
    //       onChange={handleInputChange}
    //       placeholder="Name"
    //       required
    //     />
    //     <input
    //       type="email"
    //       name="email"
    //       value={formData.email}
    //       onChange={handleInputChange}
    //       placeholder="Email"
    //       required
    //     />
    //     <input
    //       type="password"
    //       name="password"
    //       value={formData.password}
    //       onChange={handleInputChange}
    //       placeholder="Password"
    //       required
    //     />
    //     <button type="submit" disabled={isLoading}>
    //       {isLoading ? "Signing Up..." : "Sign Up"}
    //     </button>
    //   </form>
    //   {error && <p style={{ color: "red" }}>{error}</p>}
    // </div>
  );
};

export default Registration;
