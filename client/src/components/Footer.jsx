import React from "react";
import { Link } from "react-router-dom";
import logoImage from "../assets/logo.png";

function Footer() {
  return (
    <footer className="bg-gray-200 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <ul className="flex space-x-4">
          <li>
            <Link to="/about" className="text-blue-500">
              About
            </Link>
          </li>
          <li>
            <Link to="/privacy-policy" className="text-blue-500">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link to="/terms-of-use" className="text-blue-500">
              Terms of Use
            </Link>
          </li>
          <li>
            <Link to="/customer-service" className="text-blue-500">
              Customer Service
            </Link>
          </li>
        </ul>
        <img src={logoImage} alt="logo-image" className="h-8 w-8" />
      </div>
    </footer>
  );
}

export default Footer;
