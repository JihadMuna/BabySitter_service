import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useBabysittersList from "../hooks/useBabysittersList";
import Spinner from "react-bootstrap/Spinner";
import Email from "./Email";

const BabysitterProfile = () => {
  const { id } = useParams();
  const { babysittersList, loading, error, fetchData } = useBabysittersList();
  const [babysitter, setBabysitter] = useState(null);

  // useEffect(async () => {
  //   await fetchData();
  // }, []);
  useEffect(() => {
    const fetchBabysitters = async () => {
      // Fetch initial data
      // Find the babysitter by ID
      const selectedBabysitter = babysittersList.find((b) => b._id === id);
      setBabysitter(selectedBabysitter);
    };

    fetchBabysitters();
  }, [id, babysittersList]);

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

  if (!babysitter) {
    return <div>Babysitter not found</div>;
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-md bg-gray-200 p-8 rounded-md shadow-md">
        <h2 className="text-3xl text-blue-500 font-bold mb-4 text-center">
          {babysitter.username}'s Details
        </h2>
        <div className="mb-4">
          <p className="text-lg m-4"> {babysitter.description}</p>
          <p className="mb-2">
            <span className="font-semibold">Address:</span> {babysitter.address}
          </p>
          <p className="mb-2">
            <span className="font-semibold">Experience:</span>{" "}
            {babysitter.experience}
          </p>
          <p className="mb-2">
            <span className="font-semibold">Hourly Rate:</span>{" "}
            {babysitter.hourlyRate}
          </p>
          <p className="mb-2">
            <span className="font-semibold">Phone Number:</span>{" "}
            {babysitter.phoneNumber}
          </p>
          <p className="mb-2">
            <span className="font-semibold">Email:</span> {babysitter.email}
          </p>
        </div>
        <div className="text-center text-xl bg-pink-400 rounded font-bold mt-2 p-2 hover:bg-pink-300">
          <Email emailAddress={babysitter.email} />
        </div>
      </div>
    </div>
  );
};

export default BabysitterProfile;
