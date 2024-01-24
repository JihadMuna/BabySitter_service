// ParentsPage.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useParentsList from "../hooks/useParentsList";
import Spinner from "react-bootstrap/Spinner";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlinePersonSearch } from "react-icons/md";
import { LuBaby } from "react-icons/lu";
import { RiEdit2Line, RiDeleteBinLine } from "react-icons/ri"; // Import edit and delete icons

const ParentsPage = () => {
  const { parentsList, loading, error, fetchData, setParentsList } =
    useParentsList();

  const [searchTerm, setSearchTerm] = useState("");
  const [loggedIn, setLoggedIn] = useState(
    JSON.parse(localStorage.getItem("loggedIn")) || false
  );
  const [username, setUsername] = useState(
    localStorage.getItem("username") || ""
  );

  useEffect(() => {
    fetchData(); // Fetch initial data
  }, []);

  const filteredParents = parentsList.filter((parent) => {
    // Filter based on search term (you can customize the criteria)
    return (
      parent.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
      parent.numberOfKids.toString().includes(searchTerm.toLowerCase())
    );
  });

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="mt-10 p-6 bg-slate-300">
      <div className="mb-4 flex items-center">
        <h2 className="text-2xl font-semibold mb-2">
          Search Parents to find a suitable job
        </h2>
        <LuBaby className="ml-2 text-blue-500" size={35} />
        <LuBaby className="ml-2 text-pink-500" size={35} />
      </div>
      <div className="flex items-center">
        <MdOutlinePersonSearch className="mr-2 text-gray-600" size={35} />
        <input
          type="text"
          placeholder="Search by address or number of kids"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border p-2 w-full rounded"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {filteredParents.map((parent) => (
          <div
            key={parent._id}
            className="bg-white p-4 shadow-md rounded-md flex flex-col justify-between"
          >
            <div>
              <h2 className="text-lg font-semibold mb-1">{parent.username}</h2>
              <div className="grid grid-cols-2 gap-2">
                <div className="text-sm font-bold text-gray-700">
                  <p>Address:</p>
                  <p>Number of kids:</p>
                </div>
                <div className="text-sm text-gray-700">
                  <p>{parent.address}</p>
                  <p>{parent.numberOfKids}</p>
                </div>
              </div>
              <div className="text-sm text-gray-700 mt-2">
                <p>{parent.description}</p>
              </div>
            </div>
            <Link
              to={`/parents/${parent._id}`}
              className="mt-2 bg-pink-500 text-white py-2 px-4 rounded hover:bg-pink-600 flex items-center justify-center"
            >
              Contact <FaPhoneAlt className="ml-2" />
            </Link>
            {loggedIn && username === parent.username && (
              <div className="flex mt-2">
                <Link
                  to={`/parents/${parent._id}/edit`}
                  className="text-blue-500 mr-2"
                >
                  <RiEdit2Line /> Edit
                </Link>
                {/* You can replace the onClick handler with your actual delete logic */}
                <button
                  onClick={() => handleDelete(parent._id)}
                  className="text-red-500"
                >
                  <RiDeleteBinLine /> Delete
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ParentsPage;
