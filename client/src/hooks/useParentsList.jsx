import axios from "axios";
import { useEffect, useState } from "react";

const useParentsList = () => {
  const [parentsList, setParentsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const url = "http://localhost:3000/";

  useEffect(() => {
    fetchData();
  }, []);

  // get all parents
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(url + "api/parents/");
      setParentsList(response.data);
      console.log("response.data :", response.data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  // signup parents
  const createParent = async (parentData) => {
    setLoading(true);
    setError("");
    try {
      console.log(parentData);
      const response = await fetch(url + "api/parents/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parentData),
      });
      console.log("Response Status:", response.status);
      console.log("Response Status Text:", response.statusText);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      console.log("API Response:", data);

      setLoading(false);

      if (data.newParent) {
        setParentsList((prevList) => [...prevList, data.newParent]);
      } else if (data.error) {
        setError(data.error);
        // Handle error response appropriately
      }
    } catch (error) {
      setLoading(false);
      setError(error.message);
      console.error("Error creating parent:", error.message);
    }
  };

  // login parent
  // login parent
  const loginParent = async (parentData) => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch(url + "api/parents/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: parentData.email,
          password: parentData.password,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.token) {
        console.log("Parent logged in successfully. Token:", data.token);

        // Set isAuthenticated to true upon successful login
        setIsAuthenticated(true);
        console.log("isAuthenticated:", isAuthenticated);

        // Save the token to local storage
        localStorage.setItem("authToken", data.token);

        // Return user information
        return { user: data.user, error: null };
      } else {
        console.error("Login failed. Response data is undefined.");
        return { user: null, error: "Invalid response format" };
      }
    } catch (error) {
      setLoading(false);
      setError(error);
      return { user: null, error };
    }
  };

  const logout = async () => {
    try {
      setLoading(true);
      setIsAuthenticated(false);
      localStorage.removeItem("authToken");
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };
  return {
    fetchData,
    setParentsList,
    parentsList,
    loading,
    error,
    createParent,
    loginParent,
    logout,
    isAuthenticated,
    setIsAuthenticated,
  };
};

export default useParentsList;
