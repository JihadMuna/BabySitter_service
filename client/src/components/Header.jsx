import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoImage from "../assets/babylogo.png";
import { CiMenuBurger } from "react-icons/ci";
import Categories from "./Categories";

const Header = () => {
  const [showCategories, setShowCategories] = useState(false);

  const toggleCategories = () => {
    setShowCategories(!showCategories);
  };

  return (
    <header className="bg-gray-200 px-1.5 py-1 flex justify-between tems-center relative">
      <nav>
        <ul className="flex gap-4 items-center">
          <li className="text-white bg-pink-500 px-2 py-1 rounded">
            <button onClick={toggleCategories}>
              <CiMenuBurger size={25} />
            </button>
          </li>
          <li>
            <img
              src={logoImage}
              className="h-10 w-16 sm:h-8 sm:w-12 md:h-10 md:w-20 lg:h-12 lg:w-24 xl:h-10 xl:w-40"
              alt="Logo"
            />
          </li>
        </ul>
      </nav>
      <nav className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold">
        <ul className="flex gap-2 sm:gap-4">
          <li className="border text-pink-600 border-blue-500 rounded px-2 sm:px-4 py-1 text-sm sm:text-base">
            <Link to="/post-ad">Post Ad</Link>
          </li>
          <li>
            <Link to="/sign-up" className="text-sm sm:text-base">
              Sign Up
            </Link>
          </li>
          <li>|</li>
          <li>
            <Link to="/log-in" className="text-sm sm:text-base">
              Log In
            </Link>
          </li>
          <li>
            <button className="px-2 py-1 sm:px-3 sm:py-1 rounded border border-pink-500 text-sm sm:text-base">
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
