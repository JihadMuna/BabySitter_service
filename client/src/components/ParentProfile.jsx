import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useParentsList from "../hooks/useParentsList";
import Spinner from "react-bootstrap/Spinner";
import Email from "./Email";

const ParentProfile = () => {
  const { id } = useParams();
  const { parentsList, loading, error, fetchData } = useParentsList();
  const [parent, setParent] = useState(null);

  useEffect(() => {
    fetchData(); // Fetch initial data
  }, []);

  useEffect(() => {
    // Find the parent by ID
    const selectedParent = parentsList.find((p) => p._id === id);
    setParent(selectedParent);
  }, [id, parentsList]);

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

  if (!parent) {
    return <div>Parent not found</div>;
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-md bg-gray-200 p-8 rounded-md shadow-md">
        <h2 className="text-3xl text-blue-500 font-bold mb-4 text-center">
          {parent.username}'s Details
        </h2>
        <div className="mb-4">
          <p className="text-lg m-4"> {parent.description}</p>
          <p className="mb-2">
            <span className="font-semibold">Address:</span> {parent.address}
          </p>
          <p className="mb-2">
            <span className="font-semibold">Number of kids:</span>{" "}
            {parent.numberOfKids}
          </p>
          <p className="mb-2">
            <span className="font-semibold">Phone Number:</span>{" "}
            {parent.phoneNumber}
          </p>
          <p className="mb-2">
            <span className="font-semibold">Email:</span> {parent.email}
          </p>
        </div>
        <div className="text-center text-xl bg-pink-400 rounded font-bold mt-2 p-2 hover:bg-pink-300">
          <Email emailAddress={parent.email} />
        </div>
      </div>
    </div>
  );
};

export default ParentProfile;
