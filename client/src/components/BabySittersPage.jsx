import React, { useEffect, useState } from "react";
import useBabysittersList from "../hooks/useBabysittersList";
import Spinner from "react-bootstrap/Spinner";
import { FaPhoneAlt } from "react-icons/fa";

const BabySittersPage = () => {
  const { babysittersList, loading, error } = useBabysittersList();

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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10 p-6 bg-slate-300">
      {babysittersList.map((babysitter) => (
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

          <button className="mt-2 bg-pink-500 text-white py-2 px-4 rounded hover:bg-pink-600 flex items-center justify-center">
            Contact <FaPhoneAlt className="ml-2" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default BabySittersPage;
