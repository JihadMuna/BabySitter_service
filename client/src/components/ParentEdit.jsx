// ParentEdit.js
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import useParentsList from "../hooks/useParentsList";
import Spinner from "react-bootstrap/Spinner";

const ParentEdit = () => {
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

  const [editedInfo, setEditedInfo] = useState({
    // Initial state with the parent's existing information
    username: parent?.username || "",
    address: parent?.address || "",
    numberOfKids: parent?.numberOfKids || 0,
    description: parent?.description || "",
    // Add other fields as needed
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const handleSave = () => {
    // Perform the logic to save the edited information (e.g., send a request to the server)
    // After saving, navigate back to the parent profile page
    // This is a placeholder, you should replace it with the actual logic
    console.log("Saving edited information:", editedInfo);
    // Redirect to the parent profile page using Link
  };

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
    <div>
      <h2>Edit {parent.username}'s Information</h2>
      <form>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={editedInfo.username}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Address:
          <input
            type="text"
            name="address"
            value={editedInfo.address}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Number of Kids:
          <input
            type="number"
            name="numberOfKids"
            value={editedInfo.numberOfKids}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Description:
          <textarea
            name="description"
            value={editedInfo.description}
            onChange={handleInputChange}
          />
        </label>
        <br />
        {/* Add other fields as needed */}
        <Link to={`/parents/${id}`} onClick={handleSave}>
          <button type="button">Save Changes</button>
        </Link>
      </form>
    </div>
  );
};

export default ParentEdit;
