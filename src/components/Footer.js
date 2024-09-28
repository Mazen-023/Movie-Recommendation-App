import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-center bg-neutral-800 bg-opacity-70 dark:bg-neutral-300 dark:bg-opacity-35 text-neutral-300 light:text-neutral-200 py-2">
      <div className="flex items-center justify-center gap-4">
        <Link
          className="text-neutral-300 dark:text-neutral-600 hover:text-neutral-200 dark:hover:text-neutral-500"
          to="/"
        >
          About
        </Link>
        <Link
          className="text-neutral-300 dark:text-neutral-600 hover:text-neutral-200 dark:hover:text-neutral-500"
          to="/"
        >
          Contact
        </Link>
      </div>
      <p className="text-sm text-neutral-300 dark:text-neutral-600 ">
        Created By YARMDev Team
      </p>
    </footer>
  );
};

export default Footer;
