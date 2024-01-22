import React, { useEffect, useState } from "react";
import useBabysittersList from "../hooks/useBabysittersList";
import SignupBabySitters from "./SignupBabySitters";

const BabySittersPage = () => {
  const { babysittersList, loading, error, createBabysitter, loginBabysitter } =
    useBabysittersList();
  const [allBabysitters, setAllBabysitters] = useState([]);

  useEffect(() => {
    // Fetch babysitters on component mount
    // Update the state with the fetched babysittersList
    setAllBabysitters(babysittersList);
  }, [babysittersList]);

  // Handle loading and error states
  if (loading) {
    return <div>...loading</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {babysittersList.map((babysitter) => (
        <div key={babysitter._id} className="bg-white p-4 shadow-md rounded-md">
          <img
            src={babysitter.image}
            alt={`Image of ${babysitter.username}`}
            className="w-full h-32 object-cover mb-4 rounded-md"
          />
          <h2 className="text-lg font-semibold mb-2">{babysitter.username}</h2>
          <p className="text-gray-600">{babysitter.description}</p>

          <div className="mt-4">
            <p className="text-sm text-gray-500">Age: {babysitter.age}</p>
            <p className="text-sm text-gray-500">
              Address: {babysitter.address}
            </p>
            <p className="text-sm text-gray-500">
              Work Area: {babysitter.workLocationArea}
            </p>
            <p className="text-sm text-gray-500">
              Experience: {babysitter.experience}
            </p>
            <p className="text-sm text-gray-500">
              Availability: {babysitter.availability}
            </p>
          </div>

          <button className="mt-4 bg-pink-500 text-white py-2 px-4 rounded hover:bg-pink-600">
            Contact
          </button>
        </div>
      ))}
    </div>
  );
};

export default BabySittersPage;
