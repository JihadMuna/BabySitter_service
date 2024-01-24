// BabysitterEdit.js
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import useBabysittersList from "../hooks/useBabysittersList";
import Spinner from "react-bootstrap/Spinner";

const BabysitterEdit = () => {
  const { id } = useParams();
  const { babysittersList, loading, error, fetchData } = useBabysittersList();
  const [babysitter, setBabysitter] = useState(null);

  useEffect(() => {
    fetchData(); // Fetch initial data
  }, []);

  useEffect(() => {
    // Find the babysitter by ID
    const selectedBabysitter = babysittersList.find((b) => b._id === id);
    setBabysitter(selectedBabysitter);
  }, [id, babysittersList]);

  const [editedInfo, setEditedInfo] = useState({
    // Initial state with the babysitter's existing information
    username: babysitter?.username || "",
    address: babysitter?.address || "",
    // Add other fields as needed
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const handleSave = () => {
    // Perform the logic to save the edited information (e.g., send a request to the server)
    // After saving, navigate back to the babysitter profile page
    // This is a placeholder, you should replace it with the actual logic
    console.log("Saving edited information:", editedInfo);
    // Redirect to the babysitter profile page using Link
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

  if (!babysitter) {
    return <div>Babysitter not found</div>;
  }

  return (
    <div>
      <h2>Edit {babysitter.username}'s Information</h2>
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
        {/* Add other fields as needed */}
        <Link to={`/babysitters/${id}`} onClick={handleSave}>
          <button type="button">Save Changes</button>
        </Link>
      </form>
    </div>
  );
};

export default BabysitterEdit;
