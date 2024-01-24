import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useParentsList from "../hooks/useParentsList";
import useBabysittersList from "../hooks/useBabysittersList"; // Import the hook for babysitters
import Spinner from "react-bootstrap/Spinner";
import Email from "./Email";

const UserProfile = () => {
  const { id } = useParams();
  const {
    parentsList,
    loading: parentLoading,
    error: parentError,
    fetchData: fetchParentsData,
  } = useParentsList();
  const {
    babysittersList,
    loading: babysitterLoading,
    error: babysitterError,
    fetchData: fetchBabysittersData,
  } = useBabysittersList();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchParentsData(); // Fetch parents data
    fetchBabysittersData(); // Fetch babysitters data
  }, [fetchParentsData, fetchBabysittersData]);

  useEffect(() => {
    // Find the user by ID (checking both parents and babysitters)
    const selectedUser =
      parentsList.find((p) => p._id === id) ||
      babysittersList.find((b) => b._id === id);
    setUser(selectedUser);
  }, [id, parentsList, babysittersList]);

  if (parentLoading || babysitterLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  if (parentError || babysitterError) {
    return <div>Error: {parentError || babysitterError}</div>;
  }

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-md bg-gray-200 p-8 rounded-md shadow-md">
        <h2 className="text-3xl text-blue-500 font-bold mb-4 text-center">
          {user.username}'s Details
        </h2>
        <div className="mb-4">
          <p className="text-lg m-4"> {user.description}</p>
          <p className="mb-2">
            <span className="font-semibold">Address:</span> {user.address}
          </p>
          {user.numberOfKids && (
            <p className="mb-2">
              <span className="font-semibold">Number of kids:</span>{" "}
              {user.numberOfKids}
            </p>
          )}
          <p className="mb-2">
            <span className="font-semibold">Phone Number:</span>{" "}
            {user.phoneNumber}
          </p>
          <p className="mb-2">
            <span className="font-semibold">Email:</span> {user.email}
          </p>
        </div>
        <div className="text-center text-xl bg-pink-400 rounded font-bold mt-2 p-2 hover:bg-pink-300">
          <Email emailAddress={user.email} />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
