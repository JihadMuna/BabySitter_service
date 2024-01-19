import React from "react";
import { Link } from "react-router-dom";
import { FaSearchDollar } from "react-icons/fa";
import { RiUserSearchFill } from "react-icons/ri";
import { IoMdLogIn } from "react-icons/io";
import { FaUserLock } from "react-icons/fa";
import { IoInformationCircle } from "react-icons/io5";
import { RiCustomerService2Line } from "react-icons/ri";

const Categories = ({ style }) => {
  return (
    <div
      style={{ ...style, width: "300px" }}
      className="absolute bg-white p-8 border rounded shadow"
    >
      <ul className="list-none p-0">
        <li className="flex items-center mb-4 hover:bg-pink-100 p-2 rounded">
          <Link to="/babysitters-search" className="flex items-center">
            <RiUserSearchFill size={24} className="mr-2" />
            <span>Search for Babysitters</span>
          </Link>
        </li>
        <li className="flex items-center mb-4 hover:bg-pink-100 p-2 rounded">
          <Link to="/job-search" className="flex items-center">
            <FaSearchDollar size={24} className="mr-2" />
            <span>Search for Job</span>
          </Link>
        </li>
        <li className="flex items-center mb-4 hover:bg-pink-100 p-2 rounded">
          <Link to="/sign-up" className="flex items-center">
            <FaUserLock size={24} className="mr-2" />
            <span>Sign Up</span>
          </Link>
        </li>
        <li className="flex items-center mb-4 hover:bg-pink-100 p-2 rounded">
          <Link to="/log-in" className="flex items-center">
            <IoMdLogIn size={24} className="mr-2" />
            <span>Log In</span>
          </Link>
        </li>
        <li className="flex items-center mb-4 hover:bg-pink-100 p-2 rounded">
          <Link to="/more-info" className="flex items-center">
            <IoInformationCircle size={24} className="mr-2" />
            <span>More Info</span>
          </Link>
        </li>
        <li className="flex items-center mb-4 hover:bg-pink-100 p-2 rounded">
          <Link to="/customer-service" className="flex items-center">
            <RiCustomerService2Line size={24} className="mr-2" />
            <span>Customer Service</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Categories;
