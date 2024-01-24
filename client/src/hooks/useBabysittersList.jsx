import axios from "axios";
import { useEffect, useState } from "react";

const useBabysittersList = () => {
  const [babysittersList, setBabysittersList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const url = "https://mybabysitter-service.onrender.com/";

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(url + "api/babySitters/");
      setBabysittersList(response.data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  const createBabysitter = async (babysitterData) => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch(url + "api/babySitters/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(babysitterData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Assuming the response is JSON, adjust this part based on your API response structure
      const data = await response.json();

      setLoading(false);

      if (data.newBabysitter) {
        setBabysittersList((prevList) => [...prevList, data.newBabysitter]);
      } else if (data.error) {
        setError(data.error);
      }
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  // login Babysitter
  const loginBabysitter = async (babysitterData) => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch(url + "api/babySitters/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: babysitterData.email,
          password: babysitterData.password,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data) {
        const { token } = data;
        console.log("Parent logged in successfully. Token:", token);

        // Set isAuthenticated to true upon successful login
        setIsAuthenticated(true);
        console.log("isAuthenticated :", isAuthenticated);

        // Save the token to local storage
        localStorage.setItem("authToken", token);
      } else {
        console.error("Login failed. Response data is undefined.");
      }

      setLoading(false);

      return { data, error: null };
    } catch (error) {
      setLoading(false);
      setError(error);
      return { data: null, error };
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
    babysittersList,
    setBabysittersList,
    loading,
    error,
    createBabysitter,
    loginBabysitter,
    logout,
    isAuthenticated,
    setIsAuthenticated,
  };
};

export default useBabysittersList;
