import React, { useEffect, useState } from "react";
import useBabysittersList from "../hooks/useBabysittersList";
import { Link } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlinePersonSearch } from "react-icons/md";
import { FaBabyCarriage } from "react-icons/fa";
import { MdOutlineBabyChangingStation } from "react-icons/md";
import { GiBabyBottle } from "react-icons/gi";

const BabySittersPage = () => {
  const { babysittersList, loading, error } = useBabysittersList();

  const [searchTerm, setSearchTerm] = useState("");

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

  const filteredBabysitters = babysittersList.filter((babysitter) => {
    // Filter based on search term (you can customize the criteria)
    return (
      babysitter.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
      babysitter.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
      babysitter.workLocationArea
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      babysitter.experience.toLowerCase().includes(searchTerm.toLowerCase()) ||
      babysitter.availability.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className="mt-10 p-6 bg-slate-300">
      <div className="mb-4 flex items-center">
        <h2 className="text-2xl font-semibold mb-2 sm:text-sm md:text-md">
          Search Babysitters for your needs
        </h2>
        <FaBabyCarriage className="ml-4 text-pink-500" size={30} />
        <MdOutlineBabyChangingStation
          className="ml-2 text-pink-700"
          size={35}
        />
        <GiBabyBottle className="ml-2 text-pink-800" size={30} />
      </div>
      <div className="flex items-center">
        <MdOutlinePersonSearch className="mr-2 text-gray-600" size={30} />
        <input
          type="text"
          placeholder="Search by username, address, work area, experience, or availability"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border p-2 w-full rounded sm:text-sm"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {filteredBabysitters.map((babysitter) => (
          <div
            key={babysitter._id}
            className="bg-white p-4 shadow-md rounded-md flex flex-col justify-between"
          >
            <div>
              <img
                src={babysitter.image}
                alt={`Image of ${babysitter.username}`}
                className="w-full h-32 object-cover mb-2 rounded-md"
              />
              <h2 className="text-lg font-semibold mb-1">
                {babysitter.username}
              </h2>
              <p className="text-gray-600 mb-2">{babysitter.description}</p>

              <div className="grid grid-cols-2 gap-2">
                <div className="text-sm font-bold text-gray-700">
                  <p>Age:</p>
                  <p>Address:</p>
                  <p>Work Area:</p>
                  <p>Experience:</p>
                  <p>Availability:</p>
                </div>
                <div className="text-sm text-gray-500">
                  <p>{babysitter.age}</p>
                  <p>{babysitter.address}</p>
                  <p>{babysitter.workLocationArea}</p>
                  <p>{babysitter.experience}</p>
                  <p>{babysitter.availability}</p>
                </div>
              </div>
            </div>

            <Link
              to={`/babysitters/${babysitter._id}`}
              className="mt-2 bg-pink-500 text-white py-2 px-4 rounded hover:bg-pink-600 flex items-center justify-center"
            >
              Contact <FaPhoneAlt className="ml-2" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BabySittersPage;
