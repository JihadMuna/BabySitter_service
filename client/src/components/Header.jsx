import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoImage from "../assets/babylogo.png";
import { IoMenu } from "react-icons/io5";
import Categories from "./Categories";

const Header = () => {
  const [showCategories, setShowCategories] = useState(false);

  const toggleCategories = () => {
    setShowCategories(!showCategories);
  };

  return (
    <header className="bg-gray-200 p-0.5 sm:px-4 flex justify-between items-center relative">
      <nav>
        <ul className="flex gap-4 items-center">
          <li className="text-white bg-pink-500 hover:bg-pink-400 px-1 pt-0.5 rounded">
            <button onClick={toggleCategories}>
              <IoMenu size={33} />
            </button>
          </li>
          <li>
            <img
              src={logoImage}
              className="h-10 w-auto sm:h-6 sm:w-34 md:h-8 md:w-36 lg:h-10 lg:w-38 xl:h-12 xl:w-40"
              alt="Logo"
            />
          </li>
        </ul>
      </nav>
      <nav className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold">
        <ul className="flex gap-2 sm:gap-4">
          <li className="border text-pink-700 border-black rounded hover:text-pink-500 hover:bg-gray-300 px-2 sm:px-4 py-1 text-sm sm:text-base">
            <Link to="/post-ad">Post Ad</Link>
          </li>
          <li>
            <Link
              to="/sign-up"
              className="text-sm sm:text-base hover:border-transparent hover:text-pink-600"
            >
              Sign Up
            </Link>
          </li>
          <li className="text-gray-400 text-100">|</li>
          <li>
            <Link
              to="/log-in"
              className="text-sm sm:text-base hover:border-transparent hover:text-pink-600"
            >
              Log In
            </Link>
          </li>
          <li>
            <button className="px-2 py-1 sm:px-3 sm:py-1 rounded border text-blue-600 border-pink-500 hover:bg-gray-300 hover:text-blue-500 text-sm sm:text-base">
              En
            </button>
          </li>
        </ul>
      </nav>

      {showCategories && (
        <Categories
          onClose={toggleCategories}
          style={{
            position: "absolute",
            left: "0",
            top: "100%",
            zIndex: 1,
          }}
        />
      )}
    </header>
  );
};

export default Header;
