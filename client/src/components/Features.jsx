import React from "react";
import { IoMdPerson } from "react-icons/io";
import { IoSettingsSharp } from "react-icons/io5";
import { GoChecklist } from "react-icons/go";

const Features = () => {
  return (
    <div className="container mx-auto mt-8 p-4 sm:p-8 lg:p-12 bg-white rounded shadow">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-gray-100 p-6 rounded shadow">
          <h3 className="text-xl font-bold mb-4 flex items-center">
            <IoMdPerson className="mr-4 text-gray-500 text-4xl" /> Find exactly
            who you were searching for
          </h3>
          <p className="mb-4">
            Unique information about each candidate in a personal profile that
            is rich with details, provides a sense of confidence before bringing
            home a new person, creates a first acquaintance.
          </p>
          <ul className="list-disc pl-6">
            <li>A rich personal profile for candidates</li>
            <li>Focused job ads</li>
            <li>Sending and receiving inquiries</li>
            <li>Introductory video</li>
            <li>Review</li>
            <li>Recorded recommendations Interviews</li>
          </ul>
        </div>

        {/* Card 2 */}
        <div className="bg-gray-100 p-6 rounded shadow">
          <h3 className="text-xl font-bold mb-4 flex items-center">
            <IoSettingsSharp className="mr-4 text-gray-500 text-3xl" /> Easy and
            Effective
          </h3>
          <p className="mb-4">
            No need to spend hours searching for the exact fit to your
            requirements... Helpbook has tools that make it simple and easy.
          </p>
          <ul className="list-disc pl-6">
            <li>Smart search system</li>
            <li>Search with peace of mind</li>
            <li>Information-based sorting</li>
            <li>Search on a map</li>
            <li>Personal Search Log</li>
          </ul>
        </div>

        {/* Card 3 */}
        <div className="bg-gray-100 p-6 rounded shadow">
          <h3 className="text-xl font-bold mb-4 flex items-center">
            <GoChecklist className="mr-4 text-gray-500 text-3xl" /> High quality
            and up to date
          </h3>
          <p className="mb-4">
            Helpbook is personally suited to each user while fully protecting
            their privacy.
          </p>
          <ul className="list-disc pl-6">
            <li>High quality</li>
            <li>Up to date</li>
            <li>Helpbook on Facebook</li>
            <li>Privacy</li>
            <li>To view the registration packages</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Features;
