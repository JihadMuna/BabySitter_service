import axios from "axios";
import { useEffect, useState } from "react";

const useBabysittersList = () => {
  const [babysittersList, setBabysittersList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const url = "http://localhost:3000/";

  useEffect(() => {
    fetchData();
  }, [url]);

  // get all babysitters
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(url + "api/babysitters/");
      console.log('url + "babysitters/" :', url + "api/babysitters/");
      setBabysittersList(response.data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  // signup babysitters
  const createBabysitter = async (babysitterData) => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch(url + "babySitters/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: babysitterData.username,
          email: babysitterData.email,
          password: babysitterData.password,
          phoneNumber: babysitterData.phoneNumber,
          age: babysitterData.age,
          address: babysitterData.address,
          workLocationArea: babysitterData.workLocationArea,
          experience: babysitterData.experience,
          image: babysitterData.image,
          description: babysitterData.description,
          availability: babysitterData.availability,
        }),
      });

      const data = await response.json();
      setLoading(false);

      if (data.newBabysitter) {
        // Update the babysittersList state with the new babysitter
        setBabysittersList((prevList) => [...prevList, data.newBabysitter]);
      } else if (data.error) {
        setError(data.error);
      }
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  // login babysitter
  const loginBabysitter = async (babysitterData) => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch(url + "babySitters/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: babysitterData.username,
          password: babysitterData.password,
        }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  return { babysittersList, loading, error, createBabysitter, loginBabysitter };
};

export default useBabysittersList;
